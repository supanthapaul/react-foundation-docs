import React from 'react';
import Playground from 'component-playground';
import {
  Inline,
  Grid,
  Cell,
  Breadcrumbs,
  BreadcrumbItem,
} from 'react-foundation';

export const BreadcrumbsDocs = () => (
  <section className="breadcrumbs-docs">
    <Grid>
      <Cell large={12}>
        <h2>Breadcrumbs</h2>
        <Playground codeText={require('raw-loader!../examples/breadcrumbs/basics').default}
                    scope={{ React, Inline, Breadcrumbs, BreadcrumbItem }}
                    theme="eiffel"/>
      </Cell>
    </Grid>
  </section>
);

export default BreadcrumbsDocs;
