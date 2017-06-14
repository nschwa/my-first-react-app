import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import NotFound from './NotFound';
import Dashboard from './Dashboard';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component = {App}>
      <IndexRoute component = {Dashboard} />
      <Route path="/dashboard" component = {Dashboard} />
      <Route path="/about" component = {About} />
      <Route path="*" component = {NotFound} />
    </Route>
  </Router>
);

export default Routes;
