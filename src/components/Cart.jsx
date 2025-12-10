import React from 'react';
import './Cart.css';

function Cart({ cartItems, cartTotal, onUpdateQuantity, onRemoveItem }) {
  const deliveryFee = 0.60;
  const totalAmount = cartTotal + deliveryFee;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h3 className="cart-title">Cart</h3>
        <span className="cart-count">({cartItems.length} items)</span>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <p className="empty-cart-text">Your cart is empty</p>
          <p className="empty-cart-subtext">Add items to get started</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-weight">{item.weight}</p>
                  <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                
                <div className="cart-item-actions">
                  <div className="quantity-control">
                    <button 
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="checkout-btn">
            Checkout
          </button>
          
          <div className="payment-methods">
            <p className="payment-title">We accept:</p>
            <div className="payment-icons">
              <span className="payment-icon">💳</span>
              <span className="payment-icon">🏦</span>
              <span className="payment-icon">📱</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;