import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  Thumbnail,
} from 'react-foundation';

export const ThumbnailDocs = () => (
  <section className="thumbnail-docs">
    <Row>
      <Column large={12}>
        <h2>Thumbnail</h2>
        <Playground codeText={require('raw!../examples/thumbnail/basics')}
                    scope={{ React, Thumbnail }}
                    theme="eiffel"/>
      </Column>
    </Row>
  </section>
);

export default ThumbnailDocs;
