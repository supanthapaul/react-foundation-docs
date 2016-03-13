import React from 'react';
import {
  Row,
  Column,
  Link,
  ButtonColors,
  ButtonGroup,
  ButtonGroupColors,
  ButtonGroupSizes
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
          <ButtonGroup size={ButtonGroupSizes.SMALL}>
            <Link>Small</Link>
            <Link>Button</Link>
            <Link>Group</Link>
          </ButtonGroup>
        </div>
        <div>
          <h3>Coloring</h3>
          <ButtonGroup>
            <Link color={ButtonColors.SECONDARY}>View</Link>
            <Link color={ButtonColors.SUCCESS}>Edit</Link>
            <Link color={ButtonColors.WARNING}>Share</Link>
            <Link color={ButtonColors.ALERT}>Delete</Link>
          </ButtonGroup>
          <ButtonGroup color={ButtonGroupColors.SECONDARY}>
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
          <ButtonGroup stackOnSmall>
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
