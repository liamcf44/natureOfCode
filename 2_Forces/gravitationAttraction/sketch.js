let movers = [];
let att;

function setup() {
  colorMode(HSB);
  createCanvas(640, 360);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(width), random(height), random(0.3, 2));
  }
  att = new Attractor();
}

function draw() {
  background(0);

  att.display();

  for (let i = 0; i < movers.length; i++) {
    let f = att.attract(movers[i]);
    movers[i].applyForce(f);

    movers[i].update();
    movers[i].display();
  }
}
