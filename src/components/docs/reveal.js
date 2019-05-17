import React from 'react';
import Playground from 'component-playground';
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
        <p>
          Like the Accordion component, the Tabs component is stateless, so you'll have wrap it in your own component in order to
          track the state and open the right tab when a tab is clicked.
        </p>
        <Reveal isLarge={true}>Foo</Reveal>
        <Playground codeText={require('raw!../examples/reveal/basics')}
          scope={{ React, Reveal, Button }}
          theme="eiffel" />
      </Cell>
    </Grid>
  </section>
);

export default RevealDocs;
