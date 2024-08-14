import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>Contact us at: info@handmadecrafts.com</p>
            <ul className="social-media">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
