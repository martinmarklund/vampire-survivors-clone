import Phaser from "phaser";
import GameManager from "../objects/GameManager";
class LoseScene extends Phaser.Scene {
  private gameManager!: GameManager;
  constructor() {
    super({ key: "LoseScene" });
  }

  create() {
    this.gameManager = GameManager.getInstance(this.game);

    this.add
      .text(400, 300, "Game Over!", { fontSize: "32px", color: "#ff0000" })
      .setOrigin(0.5);

    const startButton = this.add
      .text(400, 500, "Start Game", { fontSize: "32px", color: "#ffffff" })
      .setOrigin(0.5)
      .setInteractive();

    startButton.on("pointerdown", () => {
      this.gameManager.stopScene("LoseScene");
      this.gameManager.startScene("GameScene");
    });
  }
}

export default LoseScene;
