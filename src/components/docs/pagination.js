import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  Inline,
  Pagination,
  PaginationPrevious,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext,
} from 'react-foundation';

export const PaginationDocs = () => (
  <section className="pagination-docs">
    <Grid>
      <Cell large={12}>
        <h2>Pagination</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw-loader!../examples/pagination/basics').default}
                      scope={{ React, Inline, Pagination, PaginationPrevious, PaginationItem, PaginationEllipsis, PaginationNext }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Centered</h3>
          <Playground codeText={require('raw-loader!../examples/pagination/center').default}
                      scope={{ React, Inline, Pagination, PaginationPrevious, PaginationItem, PaginationEllipsis, PaginationNext }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default PaginationDocs;
