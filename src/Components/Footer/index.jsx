import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer">
            <div>
                Copyright &copy; 2021 CodewithSudeep. All Rights Reserved
            </div>
            <div>
                <Link>Privacy Policy</Link>
                <Link>Terms of Use</Link>
            </div>
        </div>
    );
}
