let loc;
let vel;
let d = 16;

function setup() {
  createCanvas(640, 360);
  loc = createVector(50, 50);
  vel = createVector(floor(random(1, 4)), floor(random(1, 4)));
}

function draw() {
  background(220);
  loc.add(vel);

  if (loc.x > width - d || loc.x < 0 + d) {
    vel.x = vel.x * -1;
  }

  if (loc.y > height - d || loc.y < 0 + d) {
    vel.y = vel.y * -1;
  }

  stroke(0);
  fill(175);
  ellipse(loc.x, loc.y, d);
}
