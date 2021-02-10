import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const Navbar = React.lazy(() => import("./Components/Navbar"));
const Footer = React.lazy(() => import("./Components/Footer"));
const NavbarSmall = React.lazy(() => import("./Components/NavbarSmall"));

// pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* navbar */}
        <Suspense fallback={<div>Navbar Loading...</div>}>
          {window.innerWidth > 1164 ? <Navbar /> : <NavbarSmall />}
        </Suspense>

        <Switch>
          {/* Home */}
          <Route
            exact
            path="/"
            render={() => (
              <Suspense fallback={<div>Home Loading...</div>}>
                <Home />
              </Suspense>
            )}
          />

          {/* About */}
          <Route
            path="/about"
            render={() => (
              <Suspense fallback={<div>About Loading...</div>}>
                <About />
              </Suspense>
            )}
          />
        </Switch>
        {/* footer */}
        <Suspense fallback={<div>Footer Loading...</div>}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
