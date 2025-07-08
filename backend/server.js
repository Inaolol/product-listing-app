const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded gold price 
const GOLD_PRICE_PER_GRAM = 65; 

// Load products from JSON file
const loadProducts = () => {
  try {
    const productsPath = path.join(__dirname, '..', 'products.json');
    const data = fs.readFileSync(productsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
};

// Calculate price
const calculatePrice = (popularityScore, weight, goldPrice) => {
  return (popularityScore + 1) * weight * goldPrice;
};

// Routes
app.get('/api/products', (req, res) => {
  try {
    const products = loadProducts();
    
    // Add calculated prices to each product
    const productsWithPrices = products.map(product => ({
      ...product,
      price: calculatePrice(product.popularityScore, product.weight, GOLD_PRICE_PER_GRAM),
      starRating: (product.popularityScore * 5).toFixed(1)
    }));

    res.json(productsWithPrices);
  } catch (error) {
    console.error('Error serving products:', error);
    res.status(500).json({ error: 'Failed to load products' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', goldPrice: GOLD_PRICE_PER_GRAM });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Gold price: $${GOLD_PRICE_PER_GRAM}/gram`);
}); 