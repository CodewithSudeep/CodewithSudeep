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
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>COURSES</li>
                    <li>RESOURCES</li>
                    <li>CAREER</li>
                    <li>BLOGS & NEWS</li>
                    <li>LOGIN / REGISTER</li>
                </ul>
            </div>
        </div>
    );
}

export default index;
