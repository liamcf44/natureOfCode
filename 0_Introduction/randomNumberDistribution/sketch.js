var randomCounts = [];
var maxNum = 40;

function setup() {
  createCanvas(640, 240);

  for (let i = 0; i <= maxNum; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

  let index = floor(random(0, maxNum + 1));
  randomCounts[index]++;

  if (randomCounts[index] == maxNum) {
    noLoop();
    stroke(0);
    fill(0, 255, 0);
  } else {
    stroke(0);
    fill(175);
  }

  let w = width / maxNum;

  for (let i = 0; i <= maxNum; i++) {
    rect(i * w, height - randomCounts[i], w - 1, randomCounts[i]);
  }
}
