import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  MediaObject,
  MediaObjectSection,
  Thumbnail,
} from 'react-foundation';

export const MediaObjectDocs = () => (
  <section className="media-object-docs">
    <Grid>
      <Cell large={12}>
        <h2>Media Object</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw-loader!../examples/media-object/basics').default}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Section Alignment</h3>
          <Playground codeText={require('raw-loader!../examples/media-object/section-alignment').default}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Stack on Small</h3>
          <Playground codeText={require('raw-loader!../examples/media-object/stack').default}
                      scope={{ React, MediaObject, MediaObjectSection, Thumbnail }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default MediaObjectDocs;
