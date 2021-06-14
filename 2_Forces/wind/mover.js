var topspeed = 10;

class Mover {
  constructor(loc, mass) {
    this.loc = loc;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;

    this.noise = floor(random(0, 10000));
    this.noiseOff = 0.01;
  }

  move() {
    this.update();
    this.checkEdges();
    this.display();
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);

    this.noise = noise(this.noiseOff);
    this.noiseOff += 0.01;
  }

  checkEdges() {
    if (this.loc.x > width) {
      this.loc.x = width;
      this.vel.x *= -1;
    } else if (this.loc.x < 0) {
      this.vel.x *= -1;
      this.loc.x = 0;
    }

    if (this.loc.y > height) {
      this.vel.y *= -1;
      this.loc.y = height;
    }
  }

  display() {
    stroke(0);

    let h = map(this.noise, 0, 1, 40, 310);
    let s = map(this.noise, 0, 1, 50, 95);
    let b = map(this.noise, 0, 1, 45, 70);

    fill(h, s, b, 5);
    ellipse(this.loc.x, this.loc.y, this.mass * 16);
  }
}
