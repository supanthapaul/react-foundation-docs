import React from 'react';
import Playground from 'component-playground';
import {
  Colors,
  Grid,
  Cell,
  Icon,
  Label,
} from 'react-foundation';

export const LabelDocs = () => (
  <section className="label-docs">
    <Grid>
      <Cell large={12}>
        <h2>Label</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/label/basics')}
                      scope={{ React, Label }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw!../examples/label/colors')}
                      scope={{ React, Colors, Label }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>With Icons</h3>
          <Playground codeText={require('raw!../examples/label/icons')}
                      scope={{ React, Colors, Label, Icon }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default LabelDocs;
