let m;

function setup() {
  createCanvas(640, 360);
  m = new Mover(
    createVector(random(width), random(height)),
    createVector(random(-2, 2), random(-2, 2)),
    16
  );
}

function draw() {
  background(220);
  m.move();
}
