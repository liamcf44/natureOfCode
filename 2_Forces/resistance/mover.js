var topspeed = 10;

class Mover {
  constructor(loc, mass) {
    this.loc = loc;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.mass = mass;
    this.rad = mass * 8;

    this.noise = floor(random(0, 10000));
    this.noiseOff = 0.01;
  }

  move() {
    this.checkEdges();
    this.update();
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

  contactEdge() {
    return this.loc.y > height - this.rad - 1;
  }

  checkEdges() {
    let bounce = -0.9;
    if (this.loc.x > width - this.rad) {
      this.loc.x = width - this.rad;
      this.vel.x *= bounce;
    } else if (this.loc.x < this.rad) {
      this.loc.x = this.rad;
      this.vel.x *= bounce;
    }

    if (this.loc.y > height - this.rad) {
      this.loc.y = height - this.rad;
      this.vel.y *= bounce;
    }
  }

  isInside(o) {
    if (
      this.loc.x > o.x &&
      this.loc.x < o.x + o.w &&
      this.loc.y > o.y &&
      this.loc.y < o.y + o.h
    ) {
      return true;
    } else {
      return false;
    }
  }

  drag(o) {
    let speed = this.vel.mag();
    let dragMag = o.c * speed * speed;

    let drag = this.vel.copy();
    drag.mult(-1);
    drag.normalize();
    drag.mult(dragMag);

    this.applyForce(drag);
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
