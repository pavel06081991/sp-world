import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Grid from 'mui/components/Grid';
import Button from 'material-ui/Button';

const Root = styled.footer`
  background-color: #c9c19f;
`;

const RootInner = styled.div`
  ${({ theme: { mixin } }) => mixin.pageCenter}
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <Root>
        <RootInner>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Button raised color="primary">
                Primary
              </Button>
            </Grid>
            <Grid item xs={12} sm>
              <Button raised color="primary">
                Primary
              </Button>
            </Grid>
          </Grid>
        </RootInner>
      </Root>
    );
  }
}
