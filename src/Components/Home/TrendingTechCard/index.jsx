import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

export default function TrendingTechCard() {
    return (
        <div className="trendingTechCard">
            <img src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png" alt="" className="course-image"/>
            <h5>
                PATH
            </h5>
            <h3 className="courseTitle">Javascript</h3>
            <p>
                12 contents
            </p>
            <Link><span style={{ color: "#3BC478" }}>~root:#</span> cd /tech-trend/js && code .</Link>
        </div>
    );
}