import Phaser from "phaser";

//Objects
import Player from "./Player";

// Utils
import InputUtil from "../utils/InputUtil";
import Score from "./Score";

type SceneConfig = [string, Phaser.Scene];

class GameManager {
  private static instance: GameManager;
  private game: Phaser.Game;

  private constructor(game: Phaser.Game) {
    this.game = game;
  }

  public static getInstance(game: Phaser.Game): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager(game);
    }
    return GameManager.instance;
  }

  private addScene(key: string, scene: Phaser.Scene): void {
    this.game.scene.add(key, scene);
    console.log(`Scene added: ${key}`);
  }

  public addScenes(sceneConfigs: SceneConfig[]): void {
    sceneConfigs.forEach((sceneConfig) => {
      this.addScene(sceneConfig[0], sceneConfig[1]);
    });
  }

  public getScenes(): Phaser.Scene[] {
    return this.game.scene.getScenes();
  }

  public startScene(key: string): void {
    this.game.scene.start(key);
  }

  public stopScene(key: string): void {
    this.game.scene.stop(key);
  }

  public switchScene(from: string, target: string): void {
    this.game.scene.switch(from, target);
  }

  public handleWin(): void {
    // Do something
  }

  public handleLose(): void {
    this.switchScene("GameScene", "LoseScene");
  }

  setupInput(scene: Phaser.Scene, player: Player): void {
    InputUtil.setupPlayerInput(scene, player);
  }

  public updateScore(score: Score, newScore: number): void {
    score.updateScore(newScore);
  }
}

export default GameManager;
