import React from 'react';
import { GridContainer, Grid, Cell } from 'react-foundation';

export const NotFound = () => (
  <div className="not-found">
    <GridContainer>
      <Grid>
        <Cell large={12}>
          <h2>Page not found.</h2>
          <a className="button primary" href="/">Go to home</a>
        </Cell>
      </Grid>
    </GridContainer>
  </div>
);
