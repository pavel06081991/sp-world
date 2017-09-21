import React from 'react';
import { Route } from 'react-router-dom'

import Page from 'components/Page';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import Games from 'components/Games';

export default () => (
  <Page>
    <Header />
    <Content
      main={<Route component={Games} />}
    />
    <Footer />
  </Page>
);
