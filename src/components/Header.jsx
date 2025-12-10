import React from 'react';
import './Header.css';

function Header({ cartCount, cartTotal }) {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <h1 className="logo">PickBazar</h1>
        </div>
        
        {/* Navigation */}
        <nav className="navigation">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Shops</a>
          <a href="#" className="nav-link">Offers</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">Pages</a>
        </nav>
        
        {/* Cart Section */}
        <div className="cart-section">
         
          
          <button className="join-button">Join</button>
        </div>
      </div>
    </header>
  );
}

export default Header;