let m = [];

function setup() {
  colorMode(HSB);
  createCanvas(640, 400);

  for (let i = 0; i < 100; i++) {
    m.push(
      new Mover(createVector(width / 2, height / 2), floor(random(0.01, 2)))
    );
  }
}

function draw() {
  background(255);
  m.forEach((i) => {
    let wind = createVector(random(0.001, 0.09), 0);
    let gravity = createVector(0, random(0.001, 0.09));
    i.applyForce(wind);
    i.applyForce(gravity);

    i.move();
  });
}
