let shape, img;
let mdl = [], UV = [];
let index = 0, index2 = 1, index3 = 2;
let rdmx = 0, rdmy = 0, rdmx2 = 0, rdmy2 = 0, rdmx3 = 0, rdmy3 = 0;
let NumbR = 3;

function preload() {
  Rock = loadModel('/assets/ROCKS/stone_2.obj', true);
  RockUV = loadImage('/assets/ROCKS/stone_2_basecolor.jpg');

  Rock2 = loadModel('/assets/ROCKS/stone_4.obj', true);
  RockUV2 = loadImage('/assets/ROCKS/rock_4_basecolor.jpg');

  Rock3 = loadModel('/assets/ROCKS/stone_6.obj', true);
  RockUV3 = loadImage('/assets/ROCKS/rock_6_basecolor.jpg');

  Rock4 = loadModel('/assets/ROCKS/stone_14.obj', true);
  RockUV4 = loadImage('/assets/ROCKS/rock_14_basecolor.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0, 0, 'fixed');
  canvas.style('z-index', '0');
  frameRate(60);

  NumbR = floor(random(1, 4));

  mdl = [Rock, Rock2, Rock3, Rock4];
  UV = [RockUV, RockUV2, RockUV3, RockUV4];
  setRandomPositions();
}

function draw() {
  background(255, 2);
  ambientLight(255);
  //orbitControl();
  stroke(0);
  strokeWeight(0);

  if (NumbR > 0) RCK(rdmx, rdmy, index);
  if (NumbR > 1) RCK(rdmx2, rdmy2, index2);
  if (NumbR > 2) RCK(rdmx3, rdmy3, index3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  NumbR = floor(random(1, 4));  // Randomly show 1 to 3 rocks
  cycleIndices();
  setRandomPositions();
}

function RCK(RX, RY, indx) {
  push();
  translate(RX, RY);
  rotateY(millis() / 1000);
  texture(UV[indx]);
  model(mdl[indx]);
  pop();
}

function cycleIndices() {
  index = (index + 1) % mdl.length;
  index2 = (index2 + 1) % mdl.length;
  index3 = (index3 + 1) % mdl.length;
}

function setRandomPositions() {
  rdmx = random(-width / 2.5, width / 2.5);
  rdmy = random(-height / 2.5, height / 2.5);
  rdmx2 = random(-width / 2.5, width / 2.5);
  rdmy2 = random(-height / 2.5, height / 2.5);
  rdmx3 = random(-width / 2.5, width / 2.5);
  rdmy3 = random(-height / 2.5, height / 2.5);
}
