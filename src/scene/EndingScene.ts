export class EndingScene extends Phaser.Scene{
  constructor(){
    super('ending');
  }

  create(){
    const { width, height } = this.game.canvas;
    this.add.image(width / 2, height / 2, 'logo');
    this.add.text(width / 2, height / 2 + 100, 'おわり').setOrigin(0.5);
    this.add.text(width / 2, height / 2 + 120, 'HAPPY END 〜それもまた青春の1ページ…〜 ※年齢制限は守りましょう').setOrigin(0.5);

    const zone = this.add.zone(width / 2, height / 2, width, height);
    zone.setInteractive({
      useHandCursor: true
    });
    zone.on('pointerdown', () => {
      this.scene.start('title');
    });
  }
}