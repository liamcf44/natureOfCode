var topspeed = 10;

class Mover {
  constructor(loc, vel, d) {
    this.loc = loc;
    this.vel = vel;
    this.vel.limit(topspeed);
    this.acc;
    this.noise;
    this.noiseOff = 0.01;
    this.d = d;
  }

  move() {
    this.update();
    this.checkEdges();
    this.display();
  }

  update() {
    this.acc = p5.Vector.random2D();
    this.noise = noise(this.noiseOff);
    this.acc.mult(this.noise);

    this.vel.add(this.acc);
    this.vel.limit(topspeed);
    this.loc.add(this.vel);

    this.noiseOff += 0.01;
  }

  checkEdges() {
    if (this.loc.x > width) {
      this.loc.x = 0;
    } else if (this.loc.x < 0) {
      this.loc.x = width;
    }

    if (this.loc.y > height) {
      this.loc.y = 0;
    } else if (this.loc.y < 0) {
      this.loc.y = height;
    }
  }

  display() {
    stroke(0);

    let h = map(this.noise, 0, 1, 40, 310);
    let s = map(this.noise, 0, 1, 50, 95);
    let b = map(this.noise, 0, 1, 45, 70);

    fill(h, s, b, 50);
    square(this.loc.x, this.loc.y, this.d, this.d / 3);
  }
}
