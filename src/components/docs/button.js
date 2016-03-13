import React from 'react';
import {
  Row,
  Column,
  Link,
  Button,
  ButtonColors,
  ButtonSizes
} from 'react-foundation';

export const ButtonDocs = () => (
  <section className="button-docs">
    <Row>
      <Column large={12}>
        <h2>Button</h2>
        <div>
          <h3>Basics</h3>
          <Link>Learn More</Link>
          <Link>View All Features</Link>
          <Button color={ButtonColors.SUCCESS}>Save</Button>
          <Button color={ButtonColors.ALERT}>Delete</Button>
        </div>
        <div>
          <h3>Sizing</h3>
          <Link size={ButtonSizes.TINY}>So Tiny</Link>
          <Link size={ButtonSizes.SMALL}>So Small</Link>
          <Link>So Basic</Link>
          <Link size={ButtonSizes.LARGE}>So Large</Link>
          <Link isExpanded>Such Expand</Link>
          <Link size={ButtonSizes.TINY} isExpanded>Wow, Small Expand</Link>
        </div>
        <div>
          <h3>Coloring</h3>
          <Link color={ButtonColors.PRIMARY}>Primary Color</Link>
          <Link color={ButtonColors.SECONDARY}>Secondary Color</Link>
          <Link color={ButtonColors.SUCCESS}>Success Color</Link>
          <Link color={ButtonColors.ALERT}>Alert Color</Link>
          <Link color={ButtonColors.WARNING}>Warning Color</Link>
          <Link isDisabled>Disabled Button</Link>
        </div>
        <div>
          <h3>Hollow Style</h3>
          <Button color={ButtonColors.PRIMARY} isHollow>Primary Color</Button>
          <Button color={ButtonColors.SECONDARY} isHollow>Secondary Color</Button>
          <Button color={ButtonColors.SUCCESS} isHollow>Success Color</Button>
          <Button color={ButtonColors.ALERT} isHollow>Alert Color</Button>
          <Button color={ButtonColors.WARNING} isHollow>Warning Color</Button>
        </div>
        <div>
          <h3>Dropdown Arrows</h3>
          <Button size={ButtonSizes.TINY} isDropdown>Dropdown Button</Button>
          <Button size={ButtonSizes.SMALL} isDropdown>Dropdown Button</Button>
          <Button isDropdown>Dropdown Button</Button>
          <Button size={ButtonSizes.LARGE} isDropdown>Dropdown Button</Button>
          <Button isExpanded isDropdown>Dropdown Button</Button>
        </div>
      </Column>
    </Row>
  </section>
);

export default ButtonDocs;
