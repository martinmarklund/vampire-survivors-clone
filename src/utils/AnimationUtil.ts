class AnimationUtil {
  static createCharacterAnimations(scene: Phaser.Scene): void {
    scene.anims.create({
      key: "walk",
      frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-down",
      frames: scene.anims.generateFrameNumbers("player", {
        start: 16,
        end: 21,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "walk-up",
      frames: scene.anims.generateFrameNumbers("player", {
        start: 24,
        end: 26,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: "idle",
      frames: scene.anims.generateFrameNumbers("player", { start: 8, end: 10 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}

export default AnimationUtil;
