import React from 'react';
import Playground from 'component-playground';
import {
  Colors,
  Sizes,
  Row,
  Column,
  Link,
  Button,
} from 'react-foundation';

export const ButtonDocs = () => (
  <section className="button-docs">
    <Row>
      <Column large={12}>
        <h2>Button</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/button/basics')}
                      scope={{ React, Colors, Link, Button }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing</h3>
          <Playground codeText={require('raw!../examples/button/sizes')}
                      scope={{ React, Sizes, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw!../examples/button/colors')}
                      scope={{ React, Colors, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Hollow Style</h3>
          <Playground codeText={require('raw!../examples/button/hollow')}
                      scope={{ React, Colors, Button }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Dropdown Arrows</h3>
          <Playground codeText={require('raw!../examples/button/dropdown-arrows')}
                      scope={{ React, Sizes, Button }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default ButtonDocs;
