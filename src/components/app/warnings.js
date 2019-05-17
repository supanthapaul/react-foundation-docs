import React from 'react';
import {
  Callout,
  Colors
} from 'react-foundation';

export const StatelessComponentWarning = () => (
  <Callout color={Colors.WARNING}>
    <h5>This is a stateless component</h5>
    <p>
      In order to get all the expected functionality out of it you'll have to wrap it in your own component and handle the state yourself.
    </p>
  </Callout>
);
