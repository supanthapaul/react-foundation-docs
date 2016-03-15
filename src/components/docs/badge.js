import React from 'react';
import Playground from 'component-playground';
import {
  Colors,
  Row,
  Column,
  Icon,
  Badge,
} from 'react-foundation';

export const BadgeDocs = () => (
  <section className="badge-docs">
    <Row>
      <Column large={12}>
        <h2>Badge</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/badge/basics')}
                      scope={{ React, Badge }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Coloring</h3>
          <Playground codeText={require('raw!../examples/badge/colors')}
                      scope={{ React, Colors, Badge }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>With Icons</h3>
          <Playground codeText={require('raw!../examples/badge/icons')}
                      scope={{ React, Colors, Badge, Icon }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default BadgeDocs;
