import React from 'react';
import {
  Colors,
  Row,
  Column,
  Icon,
  Badge,
} from 'react-foundation';

export const BadgeDocs = () => (
  <section className="badge-docs">
    <Row>
      <Column large={12}>
        <h2>Badge</h2>
        <div>
          <h3>Basics</h3>
          <Badge>1</Badge>
        </div>
        <div>
          <h3>Coloring</h3>
          <Badge color={Colors.SECONDARY}>2</Badge>
          <Badge color={Colors.SUCCESS}>3</Badge>
          <Badge color={Colors.ALERT}>A</Badge>
          <Badge color={Colors.WARNING}>B</Badge>
        </div>
        <div>
          <h3>With Icons</h3>
          <Badge color={Colors.INFO}><Icon name="fi-share"/></Badge>
          <Badge color={Colors.SUCCESS}><Icon name="fi-check"/></Badge>
          <Badge color={Colors.WARNING}><Icon name="fi-wrench"/></Badge>
        </div>
      </Column>
    </Row>
  </section>
);

export default BadgeDocs;
