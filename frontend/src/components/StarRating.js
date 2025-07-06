import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, maxStars = 5 }) => {
  const stars = [];
  
  for (let i = 1; i <= maxStars; i++) {
    let starClass = 'star';
    
    if (rating >= i) {
      starClass += ' filled';
    } else if (rating > i - 1) {
      starClass += ' half-filled';
    }
    
    stars.push(
      <span key={i} className={starClass}>
        ★
      </span>
    );
  }
  
  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating; 