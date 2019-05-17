import React from 'react';
import Playground from 'component-playground';

import {
  Colors,
  Sizes,
  Grid,
  Cell,
  Callout,
} from 'react-foundation';

export const CalloutDocs = () => (
  <section className="callout-docs">
    <Grid>
      <Cell large={12}>
        <h2>Callout</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/callout/basics')}
                      scope={{ React, Callout }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw!../examples/callout/colors')}
                      scope={{ React, Colors, Callout }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing</h3>
          <Playground codeText={require('raw!../examples/callout/sizes')}
                      scope={{ React, Sizes, Callout }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default CalloutDocs;
