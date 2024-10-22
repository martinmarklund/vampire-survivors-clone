class HealthBar {
  private scene: Phaser.Scene;
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private radius: number;
  private maxHealth: number;
  private currentHealth: number;
  private bar: Phaser.GameObjects.Graphics;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number,
    maxHealth: number
  ) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;

    this.bar = this.scene.add.graphics();
    this.draw();
  }

  private draw() {
    this.bar.clear();

    // Background
    this.bar.fillStyle(0x000000);
    this.bar.fillRoundedRect(
      this.x,
      this.y,
      this.width,
      this.height,
      this.radius
    );

    // Health bar
    const healthWidht = (this.currentHealth / this.maxHealth) * this.width;
    this.bar.fillStyle(0xff0000);
    this.bar.fillRoundedRect(
      this.x,
      this.y,
      healthWidht,
      this.height,
      this.radius
    );
  }

  public updateHealth(newHealth: number) {
    this.currentHealth = Phaser.Math.Clamp(newHealth, 0, this.maxHealth);
    this.draw();
  }

  public updatePosition(newX: number, newY: number) {
    this.x = newX;
    this.y = newY;
    this.draw();
  }
}

export default HealthBar;
