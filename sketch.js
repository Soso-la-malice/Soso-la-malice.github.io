let shape, img;
let mdl = [], UV = [];
let rocks = [];

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
  canvas.style('z-index', '-1');
  frameRate(60);

  mdl = [Rock, Rock2, Rock3, Rock4];
  UV = [RockUV, RockUV2, RockUV3, RockUV4];

  // Start with one rock
  addRock();

  noStroke();
}

function draw() {
  background(255, 2);
  ambientLight(255);

  // Draw each rock
  for (let rock of rocks) {
    push();
    translate(rock.x, rock.y);
    rotateX(rock.rotationX + millis() / 1000);
    rotateY(rock.rotationY + millis() / 1000);
    rotateZ(rock.rotationZ + millis() / 1000);
    texture(UV[rock.index]);
    model(mdl[rock.index]);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // Add a new rock
  addRock();
}

function addRock() {
  let newRock = {
    x: random(-width / 2.5, width / 2.5),
    y: random(-height / 2.5, height / 2.5),
    index: floor(random(mdl.length)),
    rotationX: random(TWO_PI),
    rotationY: random(TWO_PI),
    rotationZ: random(TWO_PI)
  };
  rocks.push(newRock);
}

function keyPressed() {
  // Reset rocks if "R" key is pressed
    clear();
    rocks = []; // Clear the rocks array
}
