import Enemy from "./Enemy";
import Player from "./Player";

class EnemySpawner {
  private scene: Phaser.Scene;
  private player: Player;
  private enemies: Phaser.Physics.Arcade.Group;

  constructor(scene: Phaser.Scene, player: Player) {
    this.scene = scene;
    this.player = player;
    this.enemies = this.scene.physics.add.group();
  }

  public spawnEnemy() {
    const x = Phaser.Math.Between(0, this.scene.scale.width);
    const y = Phaser.Math.Between(0, this.scene.scale.height);
    const side = Phaser.Math.Between(0, 3);

    switch (side) {
      case 0: // Top
        this.createEnemy(x, -50);
        break;
      case 1: // Bottom
        this.createEnemy(x, this.scene.scale.height + 50);
        break;
      case 2: // Left
        this.createEnemy(-50, y);
        break;
      case 3: // Right
        this.createEnemy(this.scene.scale.width + 50, y);
        break;
    }
  }

  private createEnemy(x: number, y: number) {
    const enemy = new Enemy(this.scene, x, y, "enemy", 20, 50, 1);
    this.enemies.add(enemy);
    enemy.moveToPlayer(this.player);
  }

  public update() {
    // This seems a bit volatile as we might kill enemies during this lookup... Reconsider refactoring this
    this.enemies.children.iterate((enemy: Phaser.GameObjects.GameObject) => {
      if (enemy instanceof Enemy) {
        enemy.moveToPlayer(this.player);
        enemy.checkCollision(this.player);
        enemy.update();
      }
      return true;
    });
  }
}

export default EnemySpawner;
