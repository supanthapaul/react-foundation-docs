import React from 'react';
import { Navbar } from '../navbar/navbar';

export const App = props => (
  <div className="app">
    <Navbar/>
    {props.children}
  </div>
);
