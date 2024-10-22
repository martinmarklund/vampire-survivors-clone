import Phaser from "phaser";

import GameScene from "./scenes/GameScene";
import WinScene from "./scenes/WinScene";
import LoseScene from "./scenes/LoseScene";
import GameManager from "./objects/GameManager";
import StartScene from "./scenes/StartScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

const startScene = new StartScene();
const gameScene = new GameScene();
const winScene = new WinScene();
const loseScene = new LoseScene();

const sceneConfigs: [string, Phaser.Scene][] = [
  ["StartScene", startScene],
  ["GameScene", gameScene],
  ["WinScene", winScene],
  ["LoseScene", loseScene],
];

const game = new Phaser.Game(config);
const gameManager = GameManager.getInstance(game);

gameManager.addScenes(sceneConfigs);

gameManager.startScene("StartScene");
