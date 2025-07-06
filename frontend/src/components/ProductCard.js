import React, { useState } from 'react';
import StarRating from './StarRating';
import ColorPicker from './ColorPicker';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(price));
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.images[selectedColor]} 
          alt={`${product.name} in ${selectedColor} gold`}
          className="product-image"
          onError={(e) => {
            e.target.src = product.images.yellow; // Fallback to yellow if image fails
          }}
        />
        <ColorPicker 
          colors={Object.keys(product.images)}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <StarRating rating={parseFloat(product.starRating)} />
          <span className="rating-text">({product.starRating})</span>
        </div>
        
        <div className="product-price">
          {formatPrice(product.price)}
        </div>
        
        <div className="product-details">
          <span className="product-weight">{product.weight}g</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 