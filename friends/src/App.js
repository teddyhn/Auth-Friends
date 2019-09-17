import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
