export class LoadingScene extends Phaser.Scene {
  constructor() {
    super('loading');
  }

  preload() {
    this.load.image('logo', '/labs.phaser.io/assets/sprites/phaser3-logo.png');
  }

  create() {
    const { width, height } = this.sys.game.canvas;
    this.add.image(width / 2, height / 2, 'logo');
    this.add.text(width / 2, height / 2 + 60, 'Loading...').setOrigin(0.5);
    this.load.image('logo', '../assets/logo.png');
    this.load.image('street', '../assets/tugakuro.jpg');
    this.load.image('gomi', '../assets/gomi.png');
    this.load.image('erobook', '../assets/erobook.png');
    this.load.image('boku', '../assets/robot.png');
    this.load.image('zyosi', '../assets/zyosi.png');

    this.load.on('complete', () => {
      this.scene.start('title');
    });

    this.load.start();
  }
}

