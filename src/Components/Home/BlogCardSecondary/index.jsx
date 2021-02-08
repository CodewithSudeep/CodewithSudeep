import { Divider } from '@material-ui/core';
import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function BlogCardSecondary(){
    const coverImage = "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

    const coverImageStyle = {
        background: `url(${coverImage}) no-repeat`,
        backgroundSize: "cover",
        padding: "70px",
        borderRadius: "12px 0 0 12px"
    }

    const contentInfo = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    return (
        <div className="blog-card-secondary">
            <div className="cover-image" style={coverImageStyle}></div>

            <div className="content">
                <h3>Lorem Ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nobis, laborum itaque eveniet totam...
                </p>
                
                <Divider style={{margin: "10px 0"}}/>

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