import React from 'react';
import {
  Colors,
  Row,
  Column,
  Progress,
  NativeProgress,
} from 'react-foundation';

export const ProgressBarDocs = () => (
  <section className="progress-bar-docs">
    <Row>
      <Column large={12}>
        <h2>Progress Bar</h2>
        <div>
          <h3>Basics</h3>
          <Progress tabIndex="0" value={0}/>
          <Progress tabIndex="0" value={50}/>
        </div>
        <div>
          <h3>Colors</h3>
          <Progress color={Colors.SECONDARY} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
          <Progress color={Colors.SUCCESS} value={50}/>
          <Progress color={Colors.WARNING} value={50}/>
          <Progress color={Colors.ALERT} value={75}/>
        </div>
        <div>
          <h3>With Text</h3>
          <Progress meter={{ text: '25%' }} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
        </div>
        <div>
          <h3>Native Progress</h3>
          <NativeProgress max={100} value={75}/>
          <NativeProgress color={Colors.SECONDARY} max={100} value={75}/>
          <NativeProgress color={Colors.SUCCESS} max={100} value={75}/>
          <NativeProgress color={Colors.WARNING} max={100} value={75}/>
          <NativeProgress color={Colors.ALERT} max={100} value={75}/>
        </div>
      </Column>
    </Row>
  </section>
);

export default ProgressBarDocs;
