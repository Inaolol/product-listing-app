import React, { useRef, useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, [products]);

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.offsetWidth || 300;
      const gap = 24; // 24px gap between cards
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.product-card')?.offsetWidth || 300;
      const gap = 24; 
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="product-carousel">
      <button 
        className={`carousel-arrow carousel-arrow-left ${!canScrollLeft ? 'disabled' : ''}`}
        onClick={scrollToLeft}
        disabled={!canScrollLeft}
      >
        ←
      </button>
      
      <div 
        className="product-grid"
        ref={scrollContainerRef}
        onScroll={checkScrollPosition}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button 
        className={`carousel-arrow carousel-arrow-right ${!canScrollRight ? 'disabled' : ''}`}
        onClick={scrollToRight}
        disabled={!canScrollRight}
      >
        →
      </button>
    </div>
  );
};

export default ProductGrid; 