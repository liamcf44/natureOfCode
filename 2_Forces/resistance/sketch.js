let m = [];
let liquid;

function setup() {
  colorMode(HSB);
  createCanvas(640, 400);

  liquid = new Liquid(0, height / 2, width, height, 0.1);

  for (let i = 0; i < 10; i++) {
    m.push(new Mover(createVector(width / 2, 0), floor(random(0.1, 4))));
  }

  createP("Click mouse to apply wind force.");
}

function draw() {
  background(255);

  liquid.display();

  m.forEach((i) => {
    if (i.isInside(liquid)) {
      i.drag(liquid);
    }

    let gravity = createVector(0, random(0.01, 0.09));
    i.applyForce(gravity);

    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      i.applyForce(wind);
    }

    if (i.contactEdge()) {
      let c = 0.1;
      let friction = i.vel.copy();
      friction.mult(-1);
      friction.setMag(c);

      i.applyForce(friction);
    }

    i.move();
  });
}
