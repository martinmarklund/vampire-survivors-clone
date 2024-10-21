import { Point } from "../utils/GeometryUtils";

import Character from "./Character";

class Player extends Character {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    health: number,
    speed: number
  ) {
    super(scene, x, y, texture, health, speed);
  }

  move(direction: Point): void {
    super.move(direction);
  }
}

export default Player;
