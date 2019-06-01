import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  Icon,
  Menu,
  MenuItem,
  MenuText,
  Alignments
} from 'react-foundation';

export const MenuDocs = () => (
  <section className="menu-docs">
    <Grid>
      <Cell large={12}>
        <h2>Menu</h2>
        <div>
          <h3>Basic Menu</h3>
          <Playground codeText={require('raw-loader!../examples/menu/basics').default}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Item Alignment</h3>
          <Playground codeText={require('raw-loader!../examples/menu/item-alignment').default}
                      scope={{ React, Alignments, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Vertical Menu</h3>
          <Playground codeText={require('raw-loader!../examples/menu/vertical').default}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Simple Style</h3>
          <Playground codeText={require('raw-loader!../examples/menu/simple').default}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Nested Style</h3>
          <Playground codeText={require('raw-loader!../examples/menu/nested').default}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Active State</h3>
          <Playground codeText={require('raw-loader!../examples/menu/active-state').default}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Text</h3>
          <Playground codeText={require('raw-loader!../examples/menu/text').default}
                      scope={{ React, Menu, MenuText, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Icons</h3>
          <Playground codeText={require('raw-loader!../examples/menu/icons').default}
                      scope={{ React, Icon, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default MenuDocs;
