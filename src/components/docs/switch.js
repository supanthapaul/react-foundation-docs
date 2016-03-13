import React from 'react';
import {
  Row,
  Column,
  Switch,
  SwitchSizes
} from 'react-foundation';

export const SwitchDocs = () => (
  <section className="switch-docs">
    <Row>
      <Column large={12}>
        <h2>Switch</h2>
        <div>
          <h3>Basics</h3>
          <Switch/>
        </div>
        <div>
          <h3>Radio Switch</h3>
          <Switch input={{ type: 'radio', name: 'testGroup', defaultChecked: true }}/>
          <Switch input={{ type: 'radio', name: 'testGroup' }}/>
          <Switch input={{ type: 'radio', name: 'testGroup' }}/>
        </div>
        <div>
          <h3>Sizing Classes</h3>
          <Switch size={SwitchSizes.TINY}/>
          <Switch size={SwitchSizes.SMALL}/>
          <Switch size={SwitchSizes.LARGE}/>
        </div>
        <div>
          <h3>Inner Labels</h3>
          <p>Do you like me?</p>
          <Switch size={SwitchSizes.LARGE} active={{ text: 'Yes' }} inactive={{ text: 'No' }}/>
        </div>
      </Column>
    </Row>
  </section>
);

export default SwitchDocs;
