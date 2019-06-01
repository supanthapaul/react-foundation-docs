import React from 'react';
import Playground from 'component-playground';
import { StatelessComponentWarning } from '../app/warnings';
import {
  Grid,
  Cell,
  Reveal,
  Button
} from 'react-foundation';

export const RevealDocs = () => (
  <section className="reveal-docs">
    <Grid>
      <Cell large={12}>
        <h2>Reveal</h2>
        <StatelessComponentWarning />
        <Reveal isLarge={true}>Foo</Reveal>
        <Playground codeText={require('raw-loader!../examples/reveal/basics').default}
          scope={{ React, Reveal, Button }}
          theme="eiffel" />
      </Cell>
    </Grid>
  </section>
);

export default RevealDocs;
