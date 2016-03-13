import React from 'react';
import {
  Row,
  Column,
  Pagination,
  PaginationPrevious,
  PaginationItem,
  PaginationEllipsis,
  PaginationNext
} from 'react-foundation';

export const PaginationDocs = () => (
  <section className="pagination-docs">
    <Row>
      <Column large={12}>
        <h2>Pagination</h2>
        <div>
          <h3>Basics</h3>
          <Pagination aria-label="Pagination">
            <PaginationPrevious isDisabled>Previous <span className="show-for-sr">page</span></PaginationPrevious>
            <PaginationItem isCurrent><span className="show-for-sr">You're on page</span> 1</PaginationItem>
            <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
            <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
            <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
            <PaginationEllipsis/>
            <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
            <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
            <PaginationNext><a aria-label="Next page">Next <span className="show-for-sr">page</span></a></PaginationNext>
          </Pagination>
        </div>
        <div>
          <h3>Centered</h3>
          <Pagination aria-label="Pagination" isCentered>
            <PaginationPrevious isDisabled>Previous <span className="show-for-sr">page</span></PaginationPrevious>
            <PaginationItem isCurrent><span className="show-for-sr">You're on page</span> 1</PaginationItem>
            <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
            <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
            <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
            <PaginationEllipsis/>
            <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
            <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
            <PaginationNext><a aria-label="Next page">Next <span className="show-for-sr">page</span></a></PaginationNext>
          </Pagination>
        </div>
      </Column>
    </Row>
  </section>
);

export default PaginationDocs;
