import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Grid from 'mui/components/Grid';

export const Root = styled.div`
  display: flex;
  background-color: #fac9b8;
`;

const RootInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  ${({ theme: { mixin } }) => mixin.pageCenter}

  && {
    &  > section {
      flex-grow: 1;
    }
  }
`;

export default class Content extends PureComponent {
  render() {
    const { main } = this.props;

    return (
      <Root>
        <RootInner>
          <Grid container component="header">
            <Grid item xs={12} sm={6}>
              col1
            </Grid>
            <Grid item xs={12} sm>
              col2
            </Grid>
          </Grid>
          <Grid container component="section">
            <Grid item xs={12} sm={6} component="aside">
              Sidebar
            </Grid>
            <Grid item xs={12} sm component="main">
              { main }
            </Grid>
          </Grid>
        </RootInner>
      </Root>
    );
  }
}
