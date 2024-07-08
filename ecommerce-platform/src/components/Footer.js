import React from 'react';
import '../styles/Footer.css';
import phone from '../icons/Antu_call-start.svg';
import email from '../icons/Email_withcircle.svg';

const Footer = () => {
    return(
        <footer className="footer">
            
            <div className='contact-info'>
                <div className="contact-item">
                    <img src={phone} alt="Phone" />
                    <p>Phone: 703-944-8330</p>
                </div>
                <div className="contact-item">
                    <img src={email} alt="Email" />
                    <p>Email: modernedgesol@gmail.com</p>
                </div>
            </div>
            
            <div className="footer-content">

                
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>We are a small business that sells high quality products that guarantee satisfaction</p>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: support@ecommerce.com</p>
                    <p>Phone: +1 703 567 890</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Allawi's Shop. All rights reserve.</p>
            </div>
        </footer>
    );
};

export default Footer;
