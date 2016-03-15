import React from 'react';
import {
  InputTypes,
  Sizes,
  Row,
  Column,
  Switch,
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
          <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }}/>
          <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
          <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
        </div>
        <div>
          <h3>Sizing Classes</h3>
          <Switch size={Sizes.TINY}/>
          <Switch size={Sizes.SMALL}/>
          <Switch size={Sizes.LARGE}/>
        </div>
        <div>
          <h3>Inner Labels</h3>
          <p>Do you like me?</p>
          <Switch size={Sizes.LARGE} active={{ text: 'Yes' }} inactive={{ text: 'No' }}/>
        </div>
      </Column>
    </Row>
  </section>
);

export default SwitchDocs;
