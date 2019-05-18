import React from 'react';
import Playground from 'component-playground';
import {
  Grid,
  Cell,
  FlexVideo,
} from 'react-foundation';

export const FlexVideoDocs = () => (
  <section className="flex-video-docs">
    <Grid>
      <Cell large={12}>
        <h2>Flex Video</h2>
        <Playground codeText={require('raw!../examples/flex-video/basics')}
                    scope={{ React, FlexVideo }}
                    theme="eiffel"/>
      </Cell>
    </Grid>
  </section>
);

export default FlexVideoDocs;
