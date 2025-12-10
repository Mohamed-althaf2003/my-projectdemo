import React, { useState } from 'react';
import './ProductModal.css';

function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="offcanvas-overlay" onClick={onClose}>
      <div className="offcanvas" onClick={e => e.stopPropagation()}>
        <div className="offcanvas-header">
          
          <h3 className="offcanvas-title">Product Details</h3>
          <button className="close-offcanvas" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="offcanvas-content">
          <div className="offcanvas-product-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="offcanvas-product-info">
            <div className="product-header">
              <h2 className="offcanvas-product-name">{product.name}</h2>
              <p className="offcanvas-product-weight">{product.weight}</p>
            </div>
            
            <div className="offcanvas-pricing">
              {product.originalPrice && (
                <span className="offcanvas-original-price">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="offcanvas-current-price">${product.price.toFixed(2)}</span>
            </div>
            
            <div className="offcanvas-description">
              <h4>Description</h4>
              <p>
                Fresh, crisp celery sticks that are perfect for snacking, salads, 
                or cooking. Packed with essential vitamins and minerals, these 
                celery sticks are sourced from organic farms and delivered fresh 
                to your doorstep.
              </p>
            </div>
            
            <div className="offcanvas-quantity">
              <span className="quantity-label">Quantity:</span>
              <div className="offcanvas-quantity-selector">
                <button className="quantity-btn minus" onClick={handleDecrement}>-</button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-btn plus" onClick={handleIncrement}>+</button>
              </div>
            </div>
            
            <div className="offcanvas-actions">
              <button className="offcanvas-add-to-cart" onClick={handleAddToCart}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V5L15 1H5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 5H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add to Cart
              </button>
              <button className="offcanvas-buy-now">Buy Now</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;