var w;

function setup() {
  createCanvas(640, 360);
  background(255);
  w = new Walker(width / 2, height / 2);
}

function draw() {
  w.step();
  w.display();
}
