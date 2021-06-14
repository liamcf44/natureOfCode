let timeX = 4;
let timeY = 2;

function setup() {
  createCanvas(640, 360);
  background(0);
  colorMode(HSB);
}

function draw() {
  let nX = noise(timeX);
  let nY = noise(timeY);

  let h = map(nX, 0, 1, 100, 270);
  let s = map(nY, 0, 1, 50, 85);
  let b = map(nX + nY / 2, 0, 1, 55, 90);

  stroke(20, 50);
  strokeWeight(0.2);
  fill(h, s, b);

  let x = map(nX, 0, 1, -50, width + 50);
  let y = map(nY, 0, 1, -50, height + 50);

  ellipse(x, y, 20, 20);
  timeX += 0.001;
  timeY += 0.002;
}
