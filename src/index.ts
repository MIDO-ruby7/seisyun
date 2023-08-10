import * as Phaser from 'phaser';

class MyScene extends Phaser.Scene {
  constructor() {
    super('myscene');
  }

  preload() {
    this.load.image('street', 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F238976%2F1ad79615-37b8-a74a-f7fb-fa5b1773f2b0.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=4b462f1cb84d41e0c71c74f88b20ed25');
    this.load.image('robot', 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F238976%2F0369f611-8ea7-6e35-c6e3-272bed67ed36.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=772bfeaf856e835ea427c5b6b3788b5a');
  }

  create() {
    this.add.image(400, 300, 'street');
    this.add.image(400, 300, 'robot');
    this.add.text(400, 300, 'Hello World', {fontFamily:'arial', fontSize: '60px'}).setOrigin(0.5);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-app',
  scene: MyScene
};

new Phaser.Game(config);
