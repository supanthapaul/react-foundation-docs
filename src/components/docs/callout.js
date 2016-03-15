import React from 'react';
import {
  Row,
  Column,
  Callout,
  CalloutColors,
  CalloutSizes
} from 'react-foundation';

export const CalloutDocs = () => (
  <section className="callout-docs">
    <Row>
      <Column large={12}>
        <h2>Callout</h2>
        <div>
          <h3>Basics</h3>
          <Callout>
            <h5>This is a callout.</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a>It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
        <div>
          <h3>Coloring</h3>
          <Callout color={CalloutColors.SECONDARY}>
            <h5>This is a secondary panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={CalloutColors.PRIMARY}>
            <h5>This is a primary panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={CalloutColors.SUCCESS}>
            <h5>This is a success panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={CalloutColors.WARNING}>
            <h5>This is a warning panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout color={CalloutColors.ALERT}>
            <h5>This is a alert panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
        <div>
          <h3>Sizing</h3>
          <Callout size={CalloutSizes.SMALL}>
            <h5>This is a secondary panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
          <Callout size={CalloutSizes.LARGE}>
            <h5>This is a secondary panel</h5>
            <p>It has an easy to override visual style, and is appropriately subdued.</p>
            <a href="#">It's dangerous to go alone, take this.</a>
          </Callout>
        </div>
      </Column>
    </Row>
  </section>
);

export default CalloutDocs;