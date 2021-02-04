import React from 'react';
import './style.css'

import Logo from '../../Images/Logo.png';

const index = () => {
    return (
        <div className="navbar">
            <div className="nav-brand">
                <img src={Logo} alt="CodewithSudeep Logo"/>
            </div>

            <div className="nav-links">
                <ul>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                    <li>Items</li>
                </ul>
            </div>
        </div>
    );
}

export default index;
