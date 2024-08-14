import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <section className="product-details">
            <h1 className="product-title">Product Name</h1>
            <p className="product-price">$49.99</p>
            <p className="product-description">Detailed description of the handmade craft.</p>
            <button className="add-to-cart-btn">Add to Cart</button>
        </section>
    );
};

export default ProductDetails;
