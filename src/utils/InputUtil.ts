import Player from "../objects/Player";
import { Point } from "./GeometryUtils";

class InputUtil {
  static setupPlayerInput(scene: Phaser.Scene, player: Player): void {
    if (!scene.input.keyboard) {
      console.error("Keyboard input is not available.");
      return;
    }

    const cursors = scene.input.keyboard.createCursorKeys();

    if (!cursors) {
      console.error("Cursor keys are not available.");
      return;
    }

    scene.input.keyboard.on("keydown", () => {
      this.updateMovement(cursors, player);
    });

    scene.input.keyboard.on("keyup", () => {
      this.updateMovement(cursors, player);
    });
  }

  private static updateMovement(
    cursors: Phaser.Types.Input.Keyboard.CursorKeys,
    player: Player
  ) {
    let moveX = 0;
    let moveY = 0;

    if (cursors.left.isDown) {
      moveX -= 1;
    }
    if (cursors.right.isDown) {
      moveX += 1;
    }
    if (cursors.up.isDown) {
      moveY -= 1;
    }
    if (cursors.down.isDown) {
      moveY += 1;
    }

    player.move(new Point(moveX, moveY));
  }
}

export default InputUtil;
