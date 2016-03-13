import React from 'react';
import {
  Row,
  Column,
  Breadcrumbs,
  BreadcrumbItem
} from 'react-foundation';

export const BreadcrumbsDocs = () => (
  <section className="breadcrumbs-docs">
    <Row>
      <Column large={12}>
        <h2>Breadcrumbs</h2>
        <div>
          <nav aria-label="You are here:" role="navigation">
            <Breadcrumbs>
              <BreadcrumbItem><a>Home</a></BreadcrumbItem>
              <BreadcrumbItem><a>Features</a></BreadcrumbItem>
              <BreadcrumbItem isDisabled>Gene Splicing</BreadcrumbItem>
              <BreadcrumbItem>
                <span className="show-for-sr">Current: </span> Cloning
              </BreadcrumbItem>
            </Breadcrumbs>
          </nav>
        </div>
      </Column>
    </Row>
  </section>
);

export default BreadcrumbsDocs;
