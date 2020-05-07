import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../views/Home';
import Post from '../views/Post'
const Routes: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={Post} />
    </Switch>
  </Router>
);

export default Routes;
