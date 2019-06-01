import React from 'react';
import Playground from 'component-playground';
import {
  Colors,
  Sizes,
  Grid,
  Cell,
  Link,
  Button,
} from 'react-foundation';

export const ButtonDocs = () => (
  <section className="button-docs">
    <Grid>
      <Cell large={12}>
        <h2>Button</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw-loader!../examples/button/basics').default}
                      scope={{ React, Colors, Link, Button }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Sizing</h3>
          <Playground codeText={require('raw-loader!../examples/button/sizes').default}
                      scope={{ React, Sizes, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw-loader!../examples/button/colors').default}
                      scope={{ React, Colors, Link }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Hollow Style</h3>
          <Playground codeText={require('raw-loader!../examples/button/hollow').default}
                      scope={{ React, Colors, Button }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Dropdown Arrows</h3>
          <Playground codeText={require('raw-loader!../examples/button/dropdown-arrows').default}
                      scope={{ React, Sizes, Button }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default ButtonDocs;
