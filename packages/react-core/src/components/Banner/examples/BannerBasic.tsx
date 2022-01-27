import React from 'react';
import { Banner } from '@patternfly/react-core';

export const BannerBasic: React.FunctionComponent = () => (
  <React.Fragment>
    <Banner>Default banner</Banner>
    <br />
    <Banner variant="info">Info banner</Banner>
    <br />
    <Banner variant="danger">Danger banner</Banner>
    <br />
    <Banner variant="success">Success banner</Banner>
    <br />
    <Banner variant="warning">Warning banner</Banner>
  </React.Fragment>
);