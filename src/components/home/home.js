import React from 'react';
import {
  Sizes,
  GridContainer,
  Grid,
  Cell,
  Link,
} from 'react-foundation';
import ButtonDocs from '../docs/button';
import ButtonGroupDocs from '../docs/button-group';
import SwitchDocs from '../docs/switch';
import MenuDocs from '../docs/menu';
import PaginationDocs from '../docs/pagination';
import BreadcrumbsDocs from '../docs/breadcrumbs';
import CalloutDocs from '../docs/callout';
import MediaObjectDocs from '../docs/media-object';
import BadgeDocs from '../docs/badge';
import FlexVideoDocs from '../docs/flex-video';
import LabelDocs from '../docs/label';
import ProgressBarDocs from '../docs/progress-bar';
import GridDocs from '../docs/grid';

export const Home = () => (
  <div className="home">
    <div className="hero">
      <Grid>
        <Cell large={12}>
          <h1>React + Foundation</h1>
          <p className="mission">Foundation as React components</p>
          <div className="buttons">
            <Link href="//github.com/nordsoftware/react-foundation" size={Sizes.LARGE}>Get started</Link>
          </div>
        </Cell>
      </Grid>
    </div>
    <div className="content">
      <GridContainer>
        <ButtonDocs />
        <ButtonGroupDocs />
        <SwitchDocs />
        <MenuDocs />
        <PaginationDocs />
        <BreadcrumbsDocs />
        <CalloutDocs />
        <MediaObjectDocs />
        <BadgeDocs />
        <FlexVideoDocs />
        <LabelDocs />
        <ProgressBarDocs />
        <GridDocs />
      </GridContainer>
    </div>
  </div>
);
