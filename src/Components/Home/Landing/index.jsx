import React from 'react';
import './style.css'

import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';

export default function Landing() {
    return (
        <div className="landing">
            <div className="landing-top"></div>

            {/* landing bottom */}
            <div className="landing-bottom">
                <div>
                    <div className="content-image">
                        <MenuBookIcon/>
                    </div>
                    <div className="content">
                        <h3>
                            130,000 courses
                        </h3>
                        <p>
                            Enjoy a variety of fresh topics
                        </p>
                    </div>
                </div>
                <div>
                    <div className="content-image">
                        <PeopleIcon/>
                    </div>
                    <div className="content">
                        <h3>
                            Supportive Teams
                        </h3>
                        <p>
                            Find the right teams for your work
                        </p>
                    </div>
                </div>
                <div>
                    <div className="content-image">
                        <SpaIcon/>
                    </div>
                    <div className="content">
                        <h3>
                            Access anytime
                        </h3>
                        <p>
                            Learn on your schedule
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
