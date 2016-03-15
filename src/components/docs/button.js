import React from 'react';
import {
  Colors,
  Sizes,
  Row,
  Column,
  Link,
  Button,
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
          <Button color={Colors.SUCCESS}>Save</Button>
          <Button color={Colors.ALERT}>Delete</Button>
        </div>
        <div>
          <h3>Sizing</h3>
          <Link size={Sizes.TINY}>So Tiny</Link>
          <Link size={Sizes.SMALL}>So Small</Link>
          <Link>So Basic</Link>
          <Link size={Sizes.LARGE}>So Large</Link>
          <Link isExpanded>Such Expand</Link>
          <Link size={Sizes.TINY} isExpanded>Wow, Small Expand</Link>
        </div>
        <div>
          <h3>Coloring</h3>
          <Link color={Colors.PRIMARY}>Primary Color</Link>
          <Link color={Colors.SECONDARY}>Secondary Color</Link>
          <Link color={Colors.SUCCESS}>Success Color</Link>
          <Link color={Colors.ALERT}>Alert Color</Link>
          <Link color={Colors.WARNING}>Warning Color</Link>
          <Link isDisabled>Disabled Button</Link>
        </div>
        <div>
          <h3>Hollow Style</h3>
          <Button color={Colors.PRIMARY} isHollow>Primary Color</Button>
          <Button color={Colors.SECONDARY} isHollow>Secondary Color</Button>
          <Button color={Colors.SUCCESS} isHollow>Success Color</Button>
          <Button color={Colors.ALERT} isHollow>Alert Color</Button>
          <Button color={Colors.WARNING} isHollow>Warning Color</Button>
        </div>
        <div>
          <h3>Dropdown Arrows</h3>
          <Button size={Sizes.TINY} isDropdown>Dropdown Button</Button>
          <Button size={Sizes.SMALL} isDropdown>Dropdown Button</Button>
          <Button isDropdown>Dropdown Button</Button>
          <Button size={Sizes.LARGE} isDropdown>Dropdown Button</Button>
          <Button isExpanded isDropdown>Dropdown Button</Button>
        </div>
      </Column>
    </Row>
  </section>
);

export default ButtonDocs;
