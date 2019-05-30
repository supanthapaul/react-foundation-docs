/*eslint no-undef: 0*/

import React from 'react';
import { render } from 'react-dom';
import { App } from './components/app/app';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import './main.scss';

render(
  <App>
    {window.location.pathname === '/' ? <Home /> : <NotFound />}
  </App>,
  document.getElementById('root')
);
