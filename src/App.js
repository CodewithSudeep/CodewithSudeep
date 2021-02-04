import React, {Suspense} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// pages
const Home = React.lazy(() => import('./Pages/Home'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* Home */}
          <Route 
            exact 
            path='/' 
            render={
              () => <Suspense fallback={<div>Home Loading...</div>}>
                <Home/>
              </Suspense>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
