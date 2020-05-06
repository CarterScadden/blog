import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../views/Home';
import Posts from '../views/Posts'
const Routes: React.FC = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
    </Switch>
  </Router>
);

export default Routes;
