import React from 'react';
import Playground from 'component-playground';
import {
  Colors,
  Grid,
  Cell,
  Progress,
  NativeProgress,
} from 'react-foundation';

export const ProgressBarDocs = () => (
  <section className="progress-bar-docs">
    <Grid>
      <Cell large={12}>
        <h2>Progress Bar</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/progress-bar/basics')}
                      scope={{ React, Progress }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Colors</h3>
          <Playground codeText={require('raw!../examples/progress-bar/colors')}
                      scope={{ React, Colors, Progress }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>With Text</h3>
          <Playground codeText={require('raw!../examples/progress-bar/with-text')}
                      scope={{ React, Progress }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Native Progress</h3>
          <Playground codeText={require('raw!../examples/progress-bar/native')}
                      scope={{ React, Colors, NativeProgress }}
                      theme="eiffel"/>
        </div>
      </Cell>
    </Grid>
  </section>
);

export default ProgressBarDocs;
