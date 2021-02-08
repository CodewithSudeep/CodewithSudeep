import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

// pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
