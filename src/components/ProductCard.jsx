import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onProductClick }) {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product, 1);
  };

  const handleCardClick = () => {
    onProductClick(product);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
        {product.isNew && (
          <span className="new-badge">New</span>
        )}
        {product.isBestSeller && (
          <span className="bestseller-badge">Bestseller</span>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          {product.rating && (
            <div className="product-rating">
              <span className="rating-stars">★★★★★</span>
              <span className="rating-count">({product.ratingCount})</span>
            </div>
          )}
        </div>
        
        <div className="product-meta">
          <span className="product-weight">{product.weight}</span>
          {product.stock && product.stock < 10 && (
            <span className="low-stock">Only {product.stock} left</span>
          )}
        </div>
        
        <div className="product-pricing">
          <div className="price-container">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            )}
            <span className="current-price">${product.price.toFixed(2)}</span>
          </div>
          
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L1 5V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V5L15 1H5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 5H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add
          </button>
        </div>
        
        {product.features && (
          <div className="product-features">
            {product.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;