import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../logo.PNG';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>    
            </div>
            
            <nav>
                <ul className='nav-main'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <ul className='nav-secondary'>
                    <li>
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;