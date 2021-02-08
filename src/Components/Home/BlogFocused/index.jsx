import React from 'react';
import './style.css'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Divider } from '@material-ui/core';

export default function BlogFocused() {
    const coverImage = "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=993&q=80";

    const contentInfo = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }
    return (
        <div className="blogFocused">
            <div className="cover-image" style={{ background: `url(${coverImage}) no-repeat` }}></div>
            <div className="content">
                <h3>Lorem Ipsum Dolor sit amet</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, fugiat! Eaque aperiam nihil at nemo esse ea illo architecto nesciunt nostrum minima, eveniet blanditiis soluta porro sit nisi quam quisquam.
                </p>
                <Divider/>
                <div className="content-info" style={contentInfo}>
                    <div>
                        Feb 15 - 3 min read, Justin Bieber
                    </div>

                    <div style={{display: "flex", alignItems: "center"}}>
                        <FavoriteBorderIcon/> 3658
                    </div>
                </div>
            </div>
        </div>
    );
}
