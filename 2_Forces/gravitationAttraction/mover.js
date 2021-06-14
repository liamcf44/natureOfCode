class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass * 8;
    this.loc = createVector(x, y);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.strokeCol = random(0, 360);
    this.fillCol = random(0, 360);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    stroke(this.strokeCol, 20, 100);
    strokeWeight(2.5);
    fill(this.fillCol, 75, 100);
    ellipse(this.loc.x, this.loc.y, this.radius * 2);
  }
}
