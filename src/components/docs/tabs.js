import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  Tabs,
  TabItem,
  TabsContent,
  TabPanel
} from 'react-foundation';

export const TabsDocs = () => (
  <section className="tabs-docs">
    <Grid>
      <Cell large={12}>
        <h2>Tabs</h2>
        <p>
          Like the Accordion component, the Tabs component is stateless, so you'll have wrap it in your own component in order to
          track the state and open the right tab when a tab is clicked.
        </p>
        <Playground codeText={require('raw!../examples/tabs/basics')}
          scope={{ React, Tabs, TabItem, TabsContent, TabPanel }}
          theme="eiffel" />
      </Cell>
    </Grid>
  </section>
);

export default TabsDocs;
