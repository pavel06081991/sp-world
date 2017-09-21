import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom'

import Game from 'components/Game';

export const Root = styled.div``;

export default class Games extends PureComponent {
  render() {
    const { match } = this.props;

    return (
      <Root>
        My games:
        <Route exact path={`${match.url}/:gameId`} component={Game} />
      </Root>
    );
  }
}
