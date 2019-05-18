import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  Thumbnail,
} from 'react-foundation';

export const ThumbnailDocs = () => (
  <section className="thumbnail-docs">
    <Grid>
      <Cell large={12}>
        <h2>Thumbnail</h2>
        <Playground codeText={require('raw!../examples/thumbnail/basics')}
                    scope={{ React, Thumbnail }}
                    theme="eiffel"/>
      </Cell>
    </Grid>
  </section>
);

export default ThumbnailDocs;
