import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <div className="container">
          <div className="loading">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Product List</h1>
          <div className="header-divider">
            <div className="divider-line"></div>
            <span className="header-metadata">{products.length} products available</span>
            <div className="divider-line"></div>
          </div>
        </header>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default App; 