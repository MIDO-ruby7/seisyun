import { DialogBox, DialogBoxConfig }  from "../class/DialogBox";

export class MainScene extends Phaser.Scene {
  constructor() {
    super('main');
  }

  create() {
    const { width, height } = this.game.canvas;

    this.add.image(width/2, height/2, 'street');

    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
      fontSize: '24px'
    };

    const DialogBoxHeight = 150;
    const DialogBoxMargin = 10;
    const DialogBoxConfig: DialogBoxConfig = {
      x: width/2,
      y: height - DialogBoxMargin - DialogBoxHeight/2,
      width: width - DialogBoxMargin * 2,
      height: DialogBoxHeight,
      padding: 10,
      margin: DialogBoxMargin,
      textStyle: textStyle
    };

    const dialogBox = new DialogBox(this, DialogBoxConfig);

    dialogBox.setText('クリックでエンディング▼');
    dialogBox.setActorNameText('NAME');

    this.add.existing(dialogBox);

    const zone = this.add.zone(width/2, height/2, width, height);
    zone.setInteractive({
      useHandCursor: true
    });
    zone.on('pointerdown', () => {
      this.scene.start('ending');
    });
  }
}
