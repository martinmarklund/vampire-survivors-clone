import { Point } from "../utils/GeometryUtils";

class Character extends Phaser.GameObjects.Sprite {
  health: number;
  speed: number;
  position: Point;

  private moveDir: Point;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    health: number,
    speed: number
  ) {
    super(scene, x, y, texture);

    this.health = health;
    this.speed = speed;

    this.position = new Point(x, y);
    this.moveDir = new Point(0, 0);

    scene.add.existing(this);
  }

  move(direction: Point): void {
    const length = Math.sqrt(
      direction.x * direction.x + direction.y * direction.y
    );

    if (length > 0) {
      direction.x /= length;
      direction.y /= length;
    }

    this.moveDir = direction;

    console.log(this.moveDir);
  }

  private updatePosition() {
    this.x += this.moveDir.x * this.speed;
    this.y += this.moveDir.y * this.speed;
  }

  private updateWalkingAnim() {
    // Player is moving, so play walking animation
    if (this.moveDir.x !== 0 || this.moveDir.y !== 0) {
      // Player is only moving up or down
      if (this.moveDir.x === 0) {
        if (this.moveDir.y < 0) {
          this.anims.play("walk-up", true);
        } else {
          this.anims.play("walk-down", true);
        }
      } else {
        // Player is moving sideways, so play sideways animation
        this.anims.play("walk", true);
        if (this.moveDir.x < 0) {
          this.flipX = true;
        } else if (this.moveDir.x > 0) {
          this.flipX = false;
        }
      }
    }
    //Player is stationary, so go back to idle animation
    else {
      this.anims.play("idle", true);
    }
  }

  update(): void {
    if (this.moveDir.x !== 0 || this.moveDir.y !== 0) {
      this.updatePosition();
      this.updateWalkingAnim;
    }

    this.updateWalkingAnim();
  }
}

export default Character;
