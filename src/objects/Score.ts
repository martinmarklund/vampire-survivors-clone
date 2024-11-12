class Score {
  private scene: Phaser.Scene;
  private score: number;
  private scoreText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.score = 0;

    this.scoreText = this.scene.add
      .text(this.scene.scale.width / 2, 10, `Score: ${this.score}`, {
        fontSize: "32px",
        color: "#ffffff",
      })
      .setOrigin(0.5, 0);
  }

  updateScore(newScore: number) {
    this.score = newScore;
    this.scoreText.setText(`Score: ${this.score}`);
  }
}

export default Score;
