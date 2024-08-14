import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">Handmade Crafts</div>
            <nav>
                <button id="menu"></button>
                <ul className="navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="cart-icon">Cart (0)</div>
        </header>
    );
};

export default Header;
