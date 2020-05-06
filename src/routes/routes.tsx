import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import View from '../views/Home';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={View} />
    </Switch>
  </Router>
);

export default Routes;
