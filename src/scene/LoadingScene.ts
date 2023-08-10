export class LoadingScene extends Phaser.Scene {
  constructor() {
    super('loading');
  }

  preload() {
    this.load.image('logo', '//labs.phaser.io/assets/sprites/phaser3-logo.png');
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    this.add.image(width / 2, height / 2, 'logo');
    this.add.text(width / 2, height / 2 + 60, 'Loading...').setOrigin(0.5);
    this.load.image('street', 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F238976%2F1ad79615-37b8-a74a-f7fb-fa5b1773f2b0.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=4b462f1cb84d41e0c71c74f88b20ed25');
    this.load.image('robot', 'https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F238976%2F0369f611-8ea7-6e35-c6e3-272bed67ed36.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=772bfeaf856e835ea427c5b6b3788b5a');


    this.load.on('complete', () => {
      this.scene.start('title');
    });

    this.load.start();
  }
}

