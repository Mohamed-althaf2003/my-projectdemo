import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

function Products({ products, loading, onAddToCart, onProductClick }) {
  if (loading) {
    return (
      <div className="products-grid loading">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div key={n} className="product-card-skeleton">
            <div className="skeleton-image"></div>
            <div className="skeleton-info">
              <div className="skeleton-title"></div>
              <div className="skeleton-weight"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="products-section">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onProductClick={onProductClick}
          />
        ))}
      </div>
      
      <div className="load-more-container">
        <button className="load-more-button">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Products;