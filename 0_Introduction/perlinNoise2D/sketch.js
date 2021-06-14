function setup() {
  createCanvas(640, 360);
  colorMode(HSB);
}

function draw() {
  loadPixels();

  let xoff = random(0, 10000);
  let zoff = random(0, 10000);
  let yset = random(0, 10000);

  for (let x = 0; x < width; x++) {
    let yoff = yset;

    for (let y = 0; y < height; y++) {
      let h = map(noise(xoff, yoff, zoff), 0, 1, 0, 360);
      let c = color(h, 100, 100);

      set(x, y, c);
      yoff += 0.01;
    }

    xoff += 0.01;
  }

  updatePixels();

  zoff += 0.01;
}
