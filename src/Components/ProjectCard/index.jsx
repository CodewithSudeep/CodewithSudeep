import React from 'react';
import './style.css'

import {Link} from 'react-router-dom'

export default function ProjectCard() {
    return (
        <div className="projectCard">
            <h4 className="title">Lorem Ipsum</h4>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem...<Link>Read More</Link></p>
            <ul className="tags">
                <li>#javascript</li>
                <li>#devops</li>
            </ul>
        </div>
    );
}