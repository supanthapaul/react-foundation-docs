import React from 'react';
import {
  Row,
  Column,
  Icon,
  Badge,
  BadgeColors
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
          <Badge color={BadgeColors.SECONDARY}>2</Badge>
          <Badge color={BadgeColors.SUCCESS}>3</Badge>
          <Badge color={BadgeColors.ALERT}>A</Badge>
          <Badge color={BadgeColors.WARNING}>B</Badge>
        </div>
        <div>
          <h3>With Icons</h3>
          <Badge color={BadgeColors.INFO}><Icon name="fi-share"/></Badge>
          <Badge color={BadgeColors.SUCCESS}><Icon name="fi-check"/></Badge>
          <Badge color={BadgeColors.WARNING}><Icon name="fi-wrench"/></Badge>
        </div>
      </Column>
    </Row>
  </section>
);

export default BadgeDocs;
