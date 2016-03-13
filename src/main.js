/*eslint no-undef: 0*/

import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import { App } from './components/app/app';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import './main.scss';

render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
