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

const index = () => {
    return (
        <div className="home">
            {/* navbar */}
            <Suspense fallback={<div>Navbar Loading...</div>}>
                <Navbar />
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
                            <TrendingTechCard/>
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard/>
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard/>
                        </Suspense>
                        <Suspense fallback={<div>Trending Tech Card Loading...</div>}>
                            <TrendingTechCard/>
                        </Suspense>
                    </div>
                    <div className="content">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
