import React from 'react';
import './Header.css';
import logo from '../../img/logo.webp'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <ul>
                <li>Offers</li>
                <li>Deals</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

export default Header;