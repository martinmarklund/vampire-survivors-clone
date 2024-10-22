import { Point } from "../utils/GeometryUtils";

import Character from "./Character";
import HealthBar from "./HealthBar";

class Player extends Character {
  private healthBar: HealthBar;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
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
      "walk",
      "walk-up",
      "walk-down",
      "idle"
    );

    this.healthBar = new HealthBar(
      scene,
      x - 25,
      y - 20,
      50,
      6,
      4,
      this.maxHealth
    );
  }

  move(direction: Point): void {
    super.move(direction);
  }

  takeDamage(amount: number): void {
    this.currentHealth -= amount;
    this.healthBar.updateHealth(this.currentHealth);
  }

  update(): void {
    super.update();
    this.healthBar.updatePosition(this.x - 25, this.y - 20);
  }
}

export default Player;
