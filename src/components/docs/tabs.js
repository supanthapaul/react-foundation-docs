import React from 'react';
import Playground from 'component-playground';
import { StatelessComponentWarning } from '../app/warnings';
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
        <StatelessComponentWarning />
        <Playground codeText={require('raw!../examples/tabs/basics')}
          scope={{ React, Tabs, TabItem, TabsContent, TabPanel }}
          theme="eiffel" />
      </Cell>
    </Grid>
  </section>
);

export default TabsDocs;
