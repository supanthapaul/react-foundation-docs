import React from 'react';
import {
  Row,
  Column,
  Link,
  ButtonSizes,
} from 'react-foundation';
import ButtonDocs from '../docs/button';
import ButtonGroupDocs from '../docs/button-group';
import SwitchDocs from '../docs/switch';
import MenuDocs from '../docs/menu';
import PaginationDocs from '../docs/pagination';
import BreadcrumbsDocs from '../docs/breadcrumbs';
import CalloutDocs from '../docs/callout';
import BadgeDocs from '../docs/badge';
import FlexVideoDocs from '../docs/flex-video';
import LabelDocs from '../docs/label';
import ProgressBarDocs from '../docs/progress-bar';
import ThumbnailDocs from '../docs/thumbnail';

export const Home = () => (
  <div className="home">
    <div className="hero">
      <Row>
        <Column large={12}>
          <h1>React + Foundation</h1>
          <p className="mission">Foundation as React components</p>
          <div className="buttons">
            <Link href="//github.com/nordsoftware/react-foundation" size={ButtonSizes.LARGE}>Get started</Link>
          </div>
        </Column>
      </Row>
    </div>
    <div className="content">
      <ButtonDocs/>
      <ButtonGroupDocs/>
      <SwitchDocs/>
      <MenuDocs/>
      <PaginationDocs/>
      <BreadcrumbsDocs/>
      <CalloutDocs/>
      <BadgeDocs/>
      <FlexVideoDocs/>
      <LabelDocs/>
      <ProgressBarDocs/>
      <ThumbnailDocs/>
    </div>
  </div>
);
