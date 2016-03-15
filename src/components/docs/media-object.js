import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  MediaObject,
  MediaObjectSection,
  Thumbnail,
} from 'react-foundation';

export const MediaObjectDocs = () => (
  <section className="media-object-docs">
    <Row>
      <Column large={12}>
        <h2>Media Object</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/media-object/basics')}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Section Alignment</h3>
          <Playground codeText={require('raw!../examples/media-object/section-alignment')}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Stack on Small</h3>
          <Playground codeText={require('raw!../examples/media-object/stack')}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default MediaObjectDocs;
