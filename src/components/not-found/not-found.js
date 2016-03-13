import React from 'react';
import { Link } from 'react-router';
import { Row, Column } from 'react-foundation';

export const NotFound = () => (
  <div className="not-found">
    <Row>
      <Column large={12}>
        <h2>Page not found.</h2>
        <Link className="button primary" to="/">Go to home</Link>
      </Column>
    </Row>
  </div>
);
