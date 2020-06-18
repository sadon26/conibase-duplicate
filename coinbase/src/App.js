import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
