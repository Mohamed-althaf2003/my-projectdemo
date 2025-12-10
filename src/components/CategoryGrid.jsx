import React from 'react';
import './CategoryGrid.css';

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

function CategoryGrid() {
  return (
    <section className="category-section">
      <h2 className="section-title">Categories</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;