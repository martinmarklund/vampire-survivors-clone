import Phaser from "phaser";

class LoseScene extends Phaser.Scene {
  constructor() {
    super({ key: "WinScene" });
  }

  create() {
    this.add
      .text(400, 300, "Game Over!", { fontSize: "32px", color: "#00ff00" })
      .setOrigin(0.5);
  }
}

export default LoseScene;
