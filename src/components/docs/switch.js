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
          <Playground codeText={require('raw!../examples/switch/basics')}
                      scope={{ React, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Radio Switch</h3>
          <Playground codeText={require('raw!../examples/switch/radio')}
                      scope={{ React, InputTypes, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing Classes</h3>
          <Playground codeText={require('raw!../examples/switch/sizes')}
                      scope={{ React, Sizes, Switch }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Inner Labels</h3>
          <Playground codeText={require('raw!../examples/switch/inner-label')}
                      scope={{ React, Sizes, Switch }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default SwitchDocs;
