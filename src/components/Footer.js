import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: contact@andharbahar.com</p>
            
            
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com"><FaFacebook /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://linkedin.com"><FaLinkedin /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Know More</h3>
            <ul>
              <li><a href="/termsofservice">Terms of Service</a></li>
              <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Andhar Bahar. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
