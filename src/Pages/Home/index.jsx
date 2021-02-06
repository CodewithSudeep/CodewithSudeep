import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

// components
const Navbar = React.lazy(() => import('../../Components/Navbar'))
const Landing = React.lazy(() => import('../../Components/Landing'))
const RecursiveMessage = React.lazy(() => import('../../Components/RecursiveMessage'));
const ProjectCard = React.lazy(() => import('../../Components/ProjectCard'))
const BlogFocused = React.lazy(() => import('../../Components/BlogFocused'))
const BlogCardSecondary = React.lazy(() => import('../../Components/BlogCardSecondary'))
const TrendingTechCard = React.lazy(() => import('../../Components/TrendingTechCard'))
const Footer = React.lazy(() => import('../../Components/Footer'))
const NavbarSmall = React.lazy(() => import('../../Components/NavbarSmall'))

const index = () => {
    return (
        <div className="home">
            {/* navbar */}
            <Suspense fallback={<div>Navbar Loading...</div>}>
                {
                    window.screen > 576 ? <Navbar/> : <NavbarSmall/>
                }
            </Suspense>

            <div className="home-body">
                {/* title message */}
                <Suspense fallback={<div>Recursive Message loading...</div>}>
                    <RecursiveMessage />
                </Suspense>

                {/* landing */}
                <Suspense fallback={<div>Landing loading...</div>}>
                    <Landing />
                </Suspense>

                {/* open projects */}
                <div className="open-projects">
                    <h2 className="title"># Open Projects</h2>
                    <div className="project-items">
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                        <Suspense fallback={<div>Project Card Loading...</div>}>
                            <ProjectCard />
                        </Suspense>
                    </div>
                    <Link><span style={{ color: "#3BC478" }}>~root:#</span> sudo ls -a open-projects</Link>
                </div>

                {/* blogs and news */}
                <div className="blogs-news">
                    <h2 className="title"># Blogs & News</h2>
                    <div className="news-items">
                        <Suspense fallback={<div>Blog Focused Loading...</div>}>
                            <BlogFocused />
                        </Suspense>
                        <div className="item-secondary">
                            <Suspense fallback={<div>Blog Card Secondary Loading...</div>}>
                                <BlogCardSecondary />
                            </Suspense>
                            <Suspense fallback={<div>Blog Card Secondary Loading...</div>}>
                                <BlogCardSecondary />
                            </Suspense>
                        </div>
                    </div>
                    <Link><span style={{ color: "#3BC478" }}>~root:#</span> sudo ls -a blogs-news</Link>
                </div>

                {/* trending techs */}
                <div className="trending-technologies">
                    <div className="technologies-items">
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard />
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard />
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard />
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard />
                        </Suspense>
                    </div>
                    <div className="content">
                        <h3># Trending Technologies</h3>
                        <h2>
                            Popular topics to learn now
                        </h2>
                        <p>
                            Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what’s topping the charts and get recommended courses to skill up.
                        </p>
                        <Link><span style={{ color: "#3BC478" }}>~root:#</span> sudo ls -a trending-techs</Link>
                    </div>
                </div>

                {/* codewithsudeep for */}
                <div className="codewithsudeep-for">
                    <u>
                        <h2># CodewithSudeep For</h2>
                    </u>

                    {/* contents */}
                    <div className="contents">
                        <div className="interns">
                            <h3># 1. Interns / Students</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt sit quasi alias quae? Odio, quos corporis reprehenderit laboriosam excepturi error ipsam illum natus consequatur ratione omnis rem voluptates beatae.
                            </p>
                            <Link><span style={{ color: "#3BC478" }}>~root:#</span> vim /root/codewithsudeep-for-interns.txt</Link>
                        </div>

                        <div className="professionals">
                            <h3># 2. Professionals</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sunt sit quasi alias quae? Odio, quos corporis reprehenderit laboriosam excepturi error ipsam illum natus consequatur ratione omnis rem voluptates beatae.
                            </p>
                            <Link><span style={{ color: "#3BC478" }}>~root:#</span> vim /root/codewithsudeep-for-professionals.txt</Link>
                        </div>

                        <div className="companies">
                            <h3># 3. Companies</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus labore quos incidunt minima iusto vel quam id nisi commodi cumque atque reiciendis beatae amet quibusdam magnam dolorem, rem sit.
                            </p>
                            <Link><span style={{ color: "#3BC478" }}>~root:#</span> vim /root/codewithsudeep-for-companies.txt</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="quote">
                <div>
                    <h2>"Everyone has history making ideas,<br/> but not everyone works on it.<br /> Neither they have the right team nor the patience."</h2>
                </div>
                <div>
                    <h3># Let's make the impossible, possible.</h3>
                    <ol>
                        <li>1. Generate an Idea</li>
                        <li>2. Gather / Join the Team</li>
                        <li>3. Make success stories</li>
                    </ol>
                    <h3>
                        <Link><span style={{ color: "#3BC478" }}>~root:#</span> sudo apt remove imposter-syndrome && apt purge imposter-syndrome</Link>
                    </h3>
                </div>
            </div>
            {/* footer */}
            <Suspense fallback={<div>Footer Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default index;
