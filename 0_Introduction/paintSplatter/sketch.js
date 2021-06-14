function setup() {
  createCanvas(640, 360);
  background(220);
  colorMode(HSB);
}

function draw() {
  let rndx = randomGaussian(width / 2, 60);
  let rndy = randomGaussian(height / 2, 30);
  noStroke();
  fill(
    floor(random(250, 255)),
    floor(random(80, 130)),
    floor(random(100, 180))
  );
  ellipse(rndx, rndy, 5, 5);
}
