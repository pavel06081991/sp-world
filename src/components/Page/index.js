import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Root as ContentRoot } from 'components/Content';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;

  & ${ContentRoot} {
    flex-grow: 1;
  }
`;

export default class Page extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Root>
        {children}
      </Root>
    );
  }
}
