import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  Icon,
  Menu,
  MenuItem,
  MenuText,
  Alignments
} from 'react-foundation';

export const MenuDocs = () => (
  <section className="menu-docs">
    <Row>
      <Column large={12}>
        <h2>Menu</h2>
        <div>
          <h3>Basic Menu</h3>
          <Playground codeText={require('raw!../examples/menu/basics')}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Item Alignment</h3>
          <Playground codeText={require('raw!../examples/menu/item-alignment')}
                      scope={{ React, Alignments, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Vertical Menu</h3>
          <Playground codeText={require('raw!../examples/menu/vertical')}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Simple Style</h3>
          <Playground codeText={require('raw!../examples/menu/simple')}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Nested Style</h3>
          <Playground codeText={require('raw!../examples/menu/nested')}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Active State</h3>
          <Playground codeText={require('raw!../examples/menu/active-state')}
                      scope={{ React, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Text</h3>
          <Playground codeText={require('raw!../examples/menu/text')}
                      scope={{ React, Menu, MenuText, MenuItem }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Icons</h3>
          <Playground codeText={require('raw!../examples/menu/icons')}
                      scope={{ React, Icon, Menu, MenuItem }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default MenuDocs;
