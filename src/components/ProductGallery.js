import React from 'react';
import './ProductGallery.css';

const ProductGallery = () => {
    return (
        <div className="product-gallery">
            <img src="images/pexels-eva-bronzini-6568637_n22.jpg" alt="Product Image 1" className="product-image" />
            <img src="images/pexels-eva-bronzini-6568639n20.jpg" alt="Product Image 2" className="product-image" />
            <img src="images/pexels-eva-bronzini-6568637_n21.jpg" alt="Product Image 3" className="product-image" />
        </div>
    );
};

export default ProductGallery;
