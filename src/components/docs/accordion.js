import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionContent
} from 'react-foundation';

export const AccordionDocs = () => (
  <section className="accordion-docs">
    <Grid>
      <Cell large={12}>
        <div>
          <h2>Accordion</h2>
          <p>
            The Accordion component is stateless, so while it is rendered correctly below, nothing will happen when you click on it.
            To add interactivity you can wrap this in your own accordion component that tracks and manages the state.
          </p>
          <Playground codeText={require('raw!../examples/accordion/basics')}
            scope={{ React, Accordion, AccordionItem, AccordionTitle, AccordionContent }}
            theme="eiffel" />
        </div>
      </Cell>
    </Grid>
  </section>
);

export default AccordionDocs;
