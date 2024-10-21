import Phaser from "phaser";
import GameManager from "../objects/GameManager";

class StartScene extends Phaser.Scene {
  private gameManager!: GameManager;

  constructor() {
    super({ key: "StartScene" });
  }

  create() {
    this.gameManager = GameManager.getInstance(this.game);

    this.add
      .text(400, 300, "Vampire Survivors Clone", {
        fontSize: "32px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    const startButton = this.add
      .text(400, 500, "Start Game", { fontSize: "32px", color: "#ffffff" })
      .setOrigin(0.5)
      .setInteractive();

    startButton.on("pointerdown", () => {
      this.gameManager.switchScene("StartScene", "GameScene");
    });
  }
}

export default StartScene;
