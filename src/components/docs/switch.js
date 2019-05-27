import React from 'react';
import Playground from 'component-playground';
import {
  InputTypes,
  Sizes,
  Grid,
  Cell,
  Switch,
} from 'react-foundation';

export const SwitchDocs = () => (
  <section className="switch-docs">
    <Grid>
      <Cell large={12}>
        <h2>Switch</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw-loader!../examples/switch/basics').default}
                      scope={{ React, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Radio Switch</h3>
          <Playground codeText={require('raw-loader!../examples/switch/radio').default}
                      scope={{ React, InputTypes, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing Classes</h3>
          <Playground codeText={require('raw-loader!../examples/switch/sizes').default}
                      scope={{ React, Sizes, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Inner Labels</h3>
          <Playground codeText={require('raw-loader!../examples/switch/inner-label').default}
                      scope={{ React, Sizes, Switch }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default SwitchDocs;
