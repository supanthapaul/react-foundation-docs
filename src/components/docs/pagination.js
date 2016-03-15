import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  Inline,
  Pagination,
  PaginationPrevious,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext,
} from 'react-foundation';

export const PaginationDocs = () => (
  <section className="pagination-docs">
    <Row>
      <Column large={12}>
        <h2>Pagination</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/pagination/basics')}
                      scope={{ React, Inline, Pagination, PaginationPrevious, PaginationItem, PaginationEllipsis, PaginationNext }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Centered</h3>
          <Playground codeText={require('raw!../examples/pagination/center')}
                      scope={{ React, Inline, Pagination, PaginationPrevious, PaginationItem, PaginationEllipsis, PaginationNext }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default PaginationDocs;
