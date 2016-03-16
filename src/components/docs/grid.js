import React from 'react';
import Playground from 'component-playground';
import {
  Breakpoints,
  Colors,
  Row,
  Column,
  Block,
  Callout,
  Thumbnail,
} from 'react-foundation';

export const GridDocs = () => (
  <section className="grid-docs">
    <Row>
      <Column large={12}>
        <h2>Grid</h2>
        <div>
          <h3>Basics</h3>
          <Playground codeText={require('raw!../examples/grid/basics')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Small Grids</h3>
          <Playground codeText={require('raw!../examples/grid/small')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Medium Grids</h3>
          <Playground codeText={require('raw!../examples/grid/medium')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Combined Column/Row</h3>
          <Playground codeText={require('raw!../examples/grid/column-row')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Fluid Row</h3>
          <Playground codeText={require('raw!../examples/grid/fluid-row')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Nesting</h3>
          <Playground codeText={require('raw!../examples/grid/nested')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Offsets</h3>
          <Playground codeText={require('raw!../examples/grid/offset')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Incomplete Rows</h3>
          <Playground codeText={require('raw!../examples/grid/end')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Collapse/Uncollapse Rows</h3>
          <Playground codeText={require('raw!../examples/grid/collapse')}
                      scope={{ React, Breakpoints, Colors, Row, Column, Block, Callout }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Centered Columns</h3>
          <Playground codeText={require('raw!../examples/grid/center')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Source Ordering</h3>
          <Playground codeText={require('raw!../examples/grid/order')}
                      scope={{ React, Row, Column }}
                      theme="eiffel"/>
        </div>
        <div>
          <h3>Block Grids</h3>
          <Playground codeText={require('raw!../examples/grid/block')}
                      scope={{ React, Row, Column, Thumbnail }}
                      theme="eiffel"/>
        </div>
      </Column>
    </Row>
  </section>
);

export default GridDocs;
