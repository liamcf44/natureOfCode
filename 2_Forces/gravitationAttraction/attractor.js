class Attractor {
  constructor() {
    this.loc = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 1;
  }

  attract(mover) {
    let f = p5.Vector.sub(this.loc, mover.loc);
    let distance = f.mag();
    distance = constrain(distance, 5, 25);

    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    f.setMag(strength);
    return f;
  }

  display() {
    let rndCol = random(0, 45);

    strokeWeight(random(0, 6));
    stroke(rndCol, 15, 100);
    fill(rndCol, random(65, 100), 100);

    ellipse(this.loc.x, this.loc.y, this.mass * 2, this.mass * 2);
  }
}
