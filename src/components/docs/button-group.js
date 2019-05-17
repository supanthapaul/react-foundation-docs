import React from 'react';
import Playground from 'component-playground';
import {
  Breakpoints,
  Colors,
  Sizes,
  Grid,
  Cell,
  Link,
  ButtonGroup,
} from 'react-foundation';

export const ButtonGroupDocs = () => (
  <section className="button-group-docs">
    <Grid>
      <Cell large={12}>
        <h2>Button Group</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/button-group/basics')}
                      scope={{ React, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing</h3>
          <Playground codeText={require('raw!../examples/button-group/sizes')}
                      scope={{ React, Sizes, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw!../examples/button-group/colors')}
                      scope={{ React, Colors, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Event-width Group</h3>
          <Playground codeText={require('raw!../examples/button-group/expand')}
                      scope={{ React, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Stacking</h3>
          <Playground codeText={require('raw!../examples/button-group/stack')}
                      scope={{ React, Breakpoints, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Split Buttons</h3>
          <Playground codeText={require('raw!../examples/button-group/split-button')}
                      scope={{ React, Breakpoints, ButtonGroup, Link }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default ButtonGroupDocs;
