import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Groceries Delivered in 90 Minutes</h1>
                    <p className="hero-subtitle">
                        Get your healthy foods & snacks delivered at your doorsteps all day everyday
                    </p>

                    <div className="search-container">
                        <div className="search-box">
                            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19 19L14.65 14.65" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search your products from here"
                            />
                        </div>
                        <button className="search-button">Search</button>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card express-card">
                            <div className="feature-header">
                               
                                <h3 className="feature-title">Express Delivery</h3>
                            </div>
                            <p className="feature-description">90 min delivery</p>
                            <button className="feature-button">Shop Now</button>
                        </div>

                        <div className="feature-card cash-card">
                            <div className="feature-header">
                                
                                <h3 className="feature-title">Cash On Delivery</h3>
                            </div>
                            <p className="feature-description">Pay when you receive</p>
                            <button className="feature-button">Shop Now</button>
                        </div>

                        <div className="feature-card gift-card">
                            <div className="feature-header">
                               
                                <h3 className="feature-title">Gift Voucher</h3>
                            </div>
                            <p className="feature-description">Perfect for gifts</p>
                            <button className="feature-button">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;