let m;

function setup() {
  colorMode(HSB);
  background(255);
  createCanvas(640, 360);
  m = new Mover(createVector(width / 2, height / 2), createVector(0, 0), 16);
}

function draw() {
  m.move();
}
