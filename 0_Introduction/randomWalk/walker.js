class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    this.x += floor(random(3)) - 1;
    this.y += floor(random(3)) - 1;
  }
}
