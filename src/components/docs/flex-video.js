import React from 'react';
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
        <div>
          <FlexVideo>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/V9gkYw35Vws" frameBorder="0" allowFullScreen></iframe>
          </FlexVideo>
          <FlexVideo isWidescreen>
            <iframe width="420" height="315" src="https://www.youtube.com/embed/aiBt44rrslw" frameBorder="0" allowFullScreen></iframe>
          </FlexVideo>
          <FlexVideo isWidescreen isVimeo>
            <iframe src="//player.vimeo.com/video/60122989" width="400" height="225" frameBorder="0" allowFullScreen></iframe>
          </FlexVideo>
        </div>
      </Column>
    </Row>
  </section>
);

export default FlexVideoDocs;
