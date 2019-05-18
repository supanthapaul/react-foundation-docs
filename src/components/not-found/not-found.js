import React from 'react';
import { Link } from 'react-router';
import { GridContainer, Grid, Cell } from 'react-foundation';

export const NotFound = () => (
  <div className="not-found">
    <GridContainer>
      <Grid>
        <Cell large={12}>
          <h2>Page not found.</h2>
          <Link className="button primary" to="/">Go to home</Link>
        </Cell>
      </Grid>
    </GridContainer>
  </div>
);
