import React from 'react';
import { Navbar } from '../navbar/navbar';
import { Home } from '../home/home';
import { NotFound } from '../not-found/not-found';

export const App = () => (
  <div className="app">
    <Navbar />
    {window.location.pathname === '/' ? <Home /> : <NotFound />}
  </div>
);
