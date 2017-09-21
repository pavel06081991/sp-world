import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';

const Root = styled.div`
  background-color: #c9c19f;
`;

const RootInner = styled.div`
  ${({ theme: { mixin } }) => mixin.pageCenter}
`;

export default class extends PureComponent {
  state = {
    isDrawerOpened: false,
  };

  toggleDrawer = () => {
    this.setState((prevState) => ({
      isDrawerOpened: !prevState.isDrawerOpened,
    }));
  };

  render() {
    const { isDrawerOpened } = this.state;

    return (
      <Root>
        <RootInner>
          <AppBar position="static" color="default">
            <Toolbar>
              <Button onClick={this.toggleDrawer}>Open</Button>
              <Typography type="title" color="inherit">
                SPWorld
              </Typography>
              <Drawer open={isDrawerOpened} onRequestClose={this.toggleDrawer}>
                <div
                  tabIndex={0}
                >
                  <List>
                    <ListItem button component={Link} to="/games/call-me">
                      <ListItemText primary="Call me" />
                    </ListItem>
                    <ListItem button component={Link} to="/games/call-me-abc">
                      <ListItemText primary="Call me abc" />
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </Toolbar>
          </AppBar>
        </RootInner>
      </Root>
    );
  }
}
