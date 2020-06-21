import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import PageRenderer from './Page-renderer'

function App() {
  return (
    <Router>
        <div className="App">
      <Navigation />
      <Switch>
        <Route path="/:page" component={PageRenderer} />
        <Route path="/"  render={() => <Redirect to="/home" />} />
        <Route component={() =>404} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
