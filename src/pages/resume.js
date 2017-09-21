import React from 'react';

import Page from 'components/Page';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';

export default () => (
  <Page>
    <Header />
    <Content
      main="Hello world"
    />
    <Footer />
  </Page>
);
