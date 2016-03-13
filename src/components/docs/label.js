import React from 'react';
import {
  Row,
  Column,
  Icon,
  Label,
  LabelColors
} from 'react-foundation';

export const LabelDocs = () => (
  <section className="label-docs">
    <Row>
      <Column large={12}>
        <h2>Label</h2>
        <div>
          <h3>Basics</h3>
          <Label>Default Label</Label>
        </div>
        <div>
          <h3>Coloring</h3>
          <Label color={LabelColors.SECONDARY}>Secondary Label</Label>
          <Label color={LabelColors.SUCCESS}>Success Label</Label>
          <Label color={LabelColors.ALERT}>Alert Label</Label>
          <Label color={LabelColors.WARNING}>Warning Label</Label>
        </div>
        <div>
          <h3>With Icons</h3>
          <Label color={LabelColors.ALERT}><Icon name="fi-circle"/> Alert Label</Label>
          <Label color={LabelColors.WARNING}><Icon name="fi-x"/> Warning Label</Label>
          <Label color={LabelColors.INFO}><Icon name="fi-widget"/> Info Label</Label>
        </div>
      </Column>
    </Row>
  </section>
);

export default LabelDocs;
