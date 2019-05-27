import React from 'react';
import { StatelessComponentWarning } from '../app/warnings';
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
          <StatelessComponentWarning />
          <Playground codeText={require('raw-loader!../examples/accordion/basics').default}
            scope={{ React, Accordion, AccordionItem, AccordionTitle, AccordionContent }}
            theme="eiffel" />
        </div>
      </Cell>
    </Grid>
  </section>
);

export default AccordionDocs;
