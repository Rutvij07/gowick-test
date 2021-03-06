import React from 'react';
import Home from './components/Home';
import Error404 from './components/Error404';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="*">
              <Error404/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
