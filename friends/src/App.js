import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendCreator from './components/FriendCreator';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/add-friend" component={FriendCreator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
