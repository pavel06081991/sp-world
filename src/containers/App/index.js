import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import resume from 'pages/resume';
import games from 'pages/games';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/resume" render={resume} />
        <Route path="/games" render={games} />
      </Switch>
    );
  }
}

export default connect(null, null)(App);
