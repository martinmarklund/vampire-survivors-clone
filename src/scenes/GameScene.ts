import Phaser from "phaser";

// Objects
import GameManager from "../objects/GameManager";
import Player from "../objects/Player";

// Utils
import AnimationUtil from "../utils/AnimationUtil";

class GameScene extends Phaser.Scene {
  private player!: Player;

  private gameManager!: GameManager;

  private map!: Phaser.Tilemaps.Tilemap;
  private tileset!: Phaser.Tilemaps.Tileset;
  private layer!: Phaser.Tilemaps.TilemapLayer;

  constructor() {
    super({ key: "GameScene" });
  }

  preload(): void {
    this.load.image("tiles", "../assets/Tilesets/TilesetField.png");
    this.load.tilemapCSV("map", "../assets/Tilemaps/Square.csv");

    this.load.spritesheet("player", "../assets/Sprites/player.png", {
      frameWidth: 16,
      frameHeight: 16,
      endFrame: 55, // 8x7 = 56 frames, so end frame is 55
    });
  }

  create(): void {
    this.gameManager = GameManager.getInstance(this.game);

    this.map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
    this.tileset = this.map.addTilesetImage(
      "Square",
      "tiles"
    ) as Phaser.Tilemaps.Tileset;
    this.layer = this.map.createLayer(
      0,
      this.tileset,
      0,
      0
    ) as Phaser.Tilemaps.TilemapLayer;

    AnimationUtil.createCharacterAnimations(this);

    this.player = new Player(this, 100, 100, "player", 100, 1);
    this.player.play("idle");

    this.gameManager.setupInput(this, this.player);
  }

  update(): void {
    this.player.update();

    if (this.player.health <= 0) {
      this.gameManager.handleLose();
    }
  }
}

export default GameScene;
