import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  Inline,
  Breadcrumbs,
  BreadcrumbItem,
} from 'react-foundation';

export const BreadcrumbsDocs = () => (
  <section className="breadcrumbs-docs">
    <Row>
      <Column large={12}>
        <h2>Breadcrumbs</h2>
        <Playground codeText={require('raw!../examples/breadcrumbs/basics')}
                    scope={{ React, Inline, Breadcrumbs, BreadcrumbItem }}
                    theme="eiffel"/>
      </Column>
    </Row>
  </section>
);

export default BreadcrumbsDocs;
