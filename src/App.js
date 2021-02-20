import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header/Header';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
