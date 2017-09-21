import React, { Component } from 'react';
import styled from 'styled-components';
import 'pixi';
import 'p2';

import CallMe from 'games/CallMe';

const gamesList = {
  'call-me': CallMe,
};

export const Root = styled.div`
  overflow: hidden;
`;

export default class Game extends Component {
  saveGameParentElem = (elem) => {
    this.gameParentElem = elem;
  };

  componentWillReceiveProps(nextProps) {
    const { gameId: newGameId } = nextProps.match.params;
    const { gameId: activeGameId } = this.props.match.params;

    if (newGameId !== activeGameId) {
      this.initGame(gamesList[newGameId]);
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const { gameId } = match.params;

    this.initGame(gamesList[gameId]);
  }

  shouldComponentUpdate() {
    return false;
  }

  initGame(Game) {
    if (this.game) {
      this.destroyGame();
    }

    if (!Game) {
      return;
    }

    this.game = new Game(this.gameParentElem);
    this.game.init();
  }

  destroyGame() {
    this.game.destroy();
    this.game = null;
  }

  render() {
    return (
      <Root innerRef={this.saveGameParentElem} />
    );
  }
}
