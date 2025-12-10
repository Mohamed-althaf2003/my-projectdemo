import React from 'react';
import './Category.css';

const categories = [
  { name: 'Fruits & Vegetables', icon: '🍎' },
  { name: 'Meat & Fish', icon: '🥩' },
  { name: 'Snacks', icon: '🍪' },
  { name: 'Pet Care', icon: '🐕' },
  { name: 'Home & Cleaning', icon: '🏠' },
  { name: 'Dairy', icon: '🥛' },
  { name: 'Cooking', icon: '🍳' },
  { name: 'Breakfast', icon: '🍞' },
  { name: 'Beverage', icon: '🥤' },
  { name: 'Health & Beauty', icon: '💄' }
];

function Category() {
  return (
    <div className="category-section">
      {/* <h3 className="category-title">Categories</h3> */}
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-item ${index === 0 ? 'active' : ''}`}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
            <span className="category-arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;