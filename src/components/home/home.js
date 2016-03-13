import React from 'react';
import { Row, Column, Link, ButtonSizes } from 'react-foundation';

export const Home = () => (
  <div className="home">
    <div className="hero">
      <Row>
        <Column large={12}>
          <h2>React + Foundation</h2>
          <p className="mission">Foundation as React components</p>
          <div className="buttons">
            <Link href="//github.com/nordsoftware/react-foundation" size={ButtonSizes.LARGE}>Get started</Link>
          </div>
        </Column>
      </Row>
    </div>
    <div className="content">
      <Row>
        <Column large={12}>
          
        </Column>
      </Row>
    </div>
  </div>
);
