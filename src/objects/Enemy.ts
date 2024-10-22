import { Point, calculateDistance } from "../utils/GeometryUtils";

import Character from "./Character";
import Player from "./Player";

class Enemy extends Character {
  public damage: number;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    damage: number,
    maxHealth: number,
    speed: number
  ) {
    super(
      scene,
      x,
      y,
      texture,
      maxHealth,
      speed,
      "enemy-walk",
      "enemy-walk-up",
      "enemy-walk-down",
      "enemy-idle"
    );

    this.damage = damage;
  }

  public moveToPlayer(player: Player) {
    const direction = new Point(player.x - this.x, player.y - this.y);
    this.move(direction);
  }

  public checkCollision(player: Player) {
    if (this.scene) {
      const distance = calculateDistance(
        new Point(this.x, this.y),
        new Point(player.x, player.y)
      );
      const collisionThreshold = 16;

      if (distance < collisionThreshold) {
        this.destroy();
        player.takeDamage(this.damage);
      }
    }
  }

  update(): void {
    if (!this.scene) {
      return;
    }
    super.update();
  }
}

export default Enemy;
