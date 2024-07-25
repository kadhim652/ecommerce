import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.PNG';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>    
            </div>
            
            <nav>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
