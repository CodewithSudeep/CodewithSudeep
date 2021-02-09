import React, { Suspense, useEffect } from "react";
import styles from "./style.module.css";

const Navbar = React.lazy(() => import("../../Components/Navbar"));
const Footer = React.lazy(() => import("../../Components/Footer"));
const NavbarSmall = React.lazy(() => import("../../Components/NavbarSmall"));
const RecursiveMessage = React.lazy(() =>
  import("../../Components/Home/RecursiveMessage")
);
const Stepper = React.lazy(() => import("../../Components/About/Stepper"));

export default function About() {
  useEffect(() => {
    document.title =
      "CodewithSudeep - About | Let's CodewithMe, withUs, CodeTogether | Online Courses, Projects, Blogs, News";
  }, []);

  return (
    <div className={styles.about}>
      {/* navbar */}
      <Suspense fallback={<div>Navbar Loading...</div>}>
        {window.innerWidth > 1164 ? <Navbar /> : <NavbarSmall />}
      </Suspense>

      <div className={styles.aboutBody}>
        {/* title message */}
        <Suspense fallback={<div>Recursive Message loading...</div>}>
          <RecursiveMessage />
        </Suspense>

        {/* codewith sudeep */}
        <span></span>
        <div className={styles.codewithsudeep}>
          <div>
            <h3># How CodewithSudeep started?</h3>
            <p>
              CodewithSudeep started as a normal idea thinking{" "}
              <i>
                "let's start a page where we'd take projects, make some side
                incomes doing freelance."
              </i>
              . Though everything was going normal like starting to make a brand
              name, make social profiles, build web presence etc. <br />
              Then we planned, <i>"okay, in order to start we need funds!"</i>.
              So we planned to teach the web development, build a team of
              mentors and generate income from there first. <br />
              Finally, we planned for so long that we almost seem closed in
              social presence but we were working on sometihng new. Finally we
              came up with this idea where we said let's create everything and
              here we are still building <i>"everything"</i>.
            </p>
          </div>

          <div>
            <h3># Mission &amp; Vision</h3>
            <p>
              Well, as you may have heard about our story we're trying to build
              everything that's possible. Also we're building a platform where
              anyone can build a team to solve a real world problem as well as a
              platform where people can learn from basics to professionals.
              <br />
              Where we see ourselves after few years is a place where we'll be
              giving a space to any people of any background for solving the
              real shit. People learning and sharing their success stories and
              companies, idea holders sharing the knowledge and people making
              real money out of it.
            </p>
          </div>
        </div>

        <div className={styles.openSources}>
          <h3># Open Sources</h3>
          <div className={styles.content}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem voluptas, repudiandae dicta eaque maiores impedit,
              distinctio ex temporibus dolore praesentium minus quos nulla nemo,
              possimus at blanditiis ullam corporis iure. <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              natus sed molestiae asperiores dolores accusamus quis laudantium
              itaque magni fugit adipisci blanditiis iusto, ducimus, quae quos,
              animi nesciunt ipsam repellendus.
            </div>

            <div>
              <Suspense fallback={<div>Stepper Loading</div>}>
                <Stepper />
              </Suspense>
            </div>
          </div>
        </div>
        <span className={styles.openSourceBanner}></span>
      </div>

      {/* footer */}
      <Suspense fallback={<div>Footer Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
