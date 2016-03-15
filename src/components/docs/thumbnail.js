import React from 'react';
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
        <div>
          <Thumbnail src="https://unsplash.it/200" alt="Picture from unsplash.it"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default ThumbnailDocs;
