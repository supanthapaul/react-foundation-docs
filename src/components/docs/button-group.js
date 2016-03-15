import React from 'react';
import {
  Breakpoints,
  Colors,
  Sizes,
  Row,
  Column,
  Link,
  ButtonGroup,
} from 'react-foundation';

export const ButtonGroupDocs = () => (
  <section className="button-group-docs">
    <Row>
      <Column large={12}>
        <h2>Button Group</h2>
        <div>
          <h3>Basics</h3>
          <ButtonGroup>
            <Link>One</Link>
            <Link>Two</Link>
            <Link>Three</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Sizing</h3>
          <ButtonGroup size={Sizes.SMALL}>
            <Link>Small</Link>
            <Link>Button</Link>
            <Link>Group</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Coloring</h3>
          <ButtonGroup>
            <Link color={Colors.SECONDARY}>View</Link>
            <Link color={Colors.SUCCESS}>Edit</Link>
            <Link color={Colors.WARNING}>Share</Link>
            <Link color={Colors.ALERT}>Delete</Link>
          </ButtonGroup>
          <ButtonGroup color={Colors.SECONDARY}>
            <Link>Harder</Link>
            <Link>Better</Link>
            <Link>Faster</Link>
            <Link>Stronger</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Event-width Group</h3>
          <ButtonGroup isExpanded>
            <Link>Expanded</Link>
            <Link>Button</Link>
            <Link>Group</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Stacking</h3>
          <ButtonGroup stackFor={Breakpoints.SMALL}>
            <Link>How</Link>
            <Link>Low</Link>
            <Link>Can</Link>
            <Link>You</Link>
            <Link>Go</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Split Buttons</h3>
          <ButtonGroup>
            <Link>Primary Action</Link>
            <Link isDropdown isArrowOnly>
              <span className="show-for-sr">Show menu</span>
            </Link>
          </ButtonGroup>
        </div>
      </Column>
    </Row>
  </section>
);

export default ButtonGroupDocs;
