import Phaser from 'phaser';

import dudeSprite from './assets/img/dude.png';

export default class {
  constructor(gameParentElem) {
    this.gameParentElem = gameParentElem;
  }

  getGameConfig() {
    return {
      width: 800,
      height: 600,
      parent: this.gameParentElem,
      renderer: Phaser.AUTO,
      scaleMode: Phaser.ScaleManager.SHOW_ALL,
      state: {
        preload: this.preload,
        create: this.create,
        update: this.update,
      }
    };
  }

  preload = () => {
    this.game.load.spritesheet('dude', dudeSprite, 32, 48);
  };

  create = () => {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.player = this.game.add.sprite(0, 0, 'dude');
    this.player3 = this.game.add.sprite(0, 110, 'dude');

    this.game.physics.arcade.enable(this.player);

    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    this.player2 = this.game.add.sprite(100, 0, 'dude');

    this.game.physics.arcade.enable(this.player2);

    this.player2.body.bounce.y = 0.5;
    this.player2.body.gravity.y = 500;
    this.player2.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    this.player2.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player2.animations.add('right', [5, 6, 7, 8], 10, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  };

  update = () => {
    this.player.body.velocity.x = 0;
    this.player2.body.velocity.x = 0;

    if (this.cursors.left.isDown)
    {
      //  Move to the left
      this.player.body.velocity.x = -150;

      this.player.animations.play('left');

      this.player2.body.velocity.x = -150;

      this.player2.animations.play('left');
    }
    else if (this.cursors.right.isDown)
    {
      //  Move to the right
      this.player.body.velocity.x = 150;

      this.player.animations.play('right');

      this.player2.body.velocity.x = 150;

      this.player2.animations.play('right');
    }
    else
    {
      //  Stand still
      this.player.animations.stop();

      this.player.frame = 4;

      this.player2.animations.stop();

      this.player2.frame = 4;
    }

    if (this.cursors.up.isDown)
    {
      this.player.body.velocity.y = -350;

      this.player2.body.velocity.y = -350;
    }

    if (this.cursors.down.isDown)
    {
      this.player.body.velocity.y = 350;

      this.player2.body.velocity.y = 350;
    }
  };

  init() {
    this.game = new Phaser.Game(this.getGameConfig());
  }

  destroy() {
    this.game.destroy();
  }
}
