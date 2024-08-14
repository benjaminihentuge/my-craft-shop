import React from 'react';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <ProductGallery />
                <ProductDetails />
                <CustomerReviews />
            </main>
            <Footer />
        </div>
    );
};

export default App;
