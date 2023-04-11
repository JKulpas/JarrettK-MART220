let texture1;
let texture2;
let texture3;
let texture4;
let texture5;
let myFont;
let dog;
let cat;
let horse;
var m1rotation = 0;
var m2rotation = 0;
var m3rotation = 0;
var m4rotation = 0;
var m5rotation = 0;
var m1rotationspeed = 0.02;
var m2rotationspeed = 0.05;
var m3rotationspeed = 0.03;
var m4rotationspeed = 0.04;
var m5rotationspeed = 0.01;
let basicshapeArray = [];
var ellipsoidTranslationX = 100;
var ellipsoidTranslationY = 100;
var coneTranslationX = -100;
var coneTranslationY = -100;


function preload() {
  myFont = loadFont('assets/Seductive Height (Demo).otf');
  texture1 = loadImage("./assets/wood.jpg")
  texture2 = loadImage("./assets/water.jpg")
  texture3 = loadImage("./assets/fire.jpg")
  texture4 = loadImage("./assets/grass.jpg")
  texture5 = loadImage("./assets/space.jpg")
  dogtexture = loadImage("./assets/dogtexture.jpg")
  cattexture = loadImage("./assets/Cat_diffuse.jpg")
  horsetexture = loadImage("./assets/Horse_v01.jpg")
  dog = loadModel("./assets/dog.obj", true)
  cat = loadModel("./assets/12221_Cat_v1_l3.obj", true)
  horse = loadModel("./assets/Horse.obj", true)
}

function setup() {
  createCanvas(800, 800, WEBGL);


  basicshapeArray.push(new basicshapeclass("ellipsoid", 50, 75, 50, ellipsoidTranslationX, ellipsoidTranslationY, 0.02, texture2));
  basicshapeArray.push(new basicshapeclass("cone", 50, 90, 0, coneTranslationX, coneTranslationY, 0.04, texture5));
}

function draw() {

  background(50);

  textFont(myFont);
  textSize(36);
  text("Jarrett Kulpas", 250, 350);

  text('Rotating Models', -300, -350)

  for (var i = 0; i < basicshapeArray.length; i++) {
    basicshapeArray[i].draw(frameCount);
  }

  push();
  scale(1);
  noStroke();
  rotateX(frameCount * 0.02)
  texture(dogtexture);
  model(dog);
  pop();


  push();
  scale(0.5);
  noStroke();
  m2rotation += m2rotationspeed;
  rotate(m2rotation);
  texture(texture3);
  translate(200, 300)
  torus(50,10,10)
  pop();


  push();
  scale(1);
  noStroke();
  m3rotation += m3rotationspeed;
  rotate(m3rotation);
  texture(cattexture);
  translate(-100, 100)
  model(cat);
  pop();


  push();
  scale(1);
  noStroke();
  m3rotation += m3rotationspeed;
  rotate(m3rotation);
  texture(texture1);
  translate(-300, 300)
  box(50,50,50)
  pop();


  push();
  scale(1);
  noStroke();
  m3rotation += m3rotationspeed;
  rotate(m3rotation);
  texture(horsetexture)
  translate(200, -200)
  model(horse);
  pop();


  push();
  scale(1);
  noStroke();
  m1rotation += m1rotationspeed;
  rotate(m1rotation)
  texture(texture4);
  translate(-100,200)
  cylinder(20,20,20)
  pop();

  if (mouseIsPressed) {
    ellipsoidTranslationX = 0;
    ellipsoidTranslationY = 0;
    ellipsoidTranslationX = floor(random(400));
    ellipsoidTranslationY = floor(random(400));
    coneTranslationX = 0;
    coneTranslationY = 0;
    coneTranslationX = floor(random(400));
    coneTranslationY = floor(random(400));
  }
}
