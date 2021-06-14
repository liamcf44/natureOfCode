class Mover {
  constructor(loc, vel, d) {
    this.loc = loc;
    this.vel = vel;
    this.d = d;
  }

  move() {
    this.update();
    this.checkEdges();
    this.display();
  }

  update() {
    this.loc.add(this.vel);
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
    fill(175);
    ellipse(this.loc.x, this.loc.y, this.d);
  }
}
