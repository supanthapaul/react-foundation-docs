import React from 'react';
import Playground from 'component-playground';
import {
  Row,
  Column,
  FlexVideo,
} from 'react-foundation';

export const FlexVideoDocs = () => (
  <section className="flex-video-docs">
    <Row>
      <Column large={12}>
        <h2>Flex Video</h2>
        <Playground codeText={require('raw!../examples/flex-video/basics')}
                    scope={{ React, FlexVideo }}
                    theme="eiffel"/>
      </Column>
    </Row>
  </section>
);

export default FlexVideoDocs;
