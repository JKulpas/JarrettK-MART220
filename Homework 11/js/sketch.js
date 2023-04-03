let texture1;
let texture2;
let texture3;
let texture4;
let texture5;
let myFont;

function preload()
{
  myFont = loadFont('assets/Seductive Height (Demo).otf');
 texture1 = loadImage("./assets/wood.jpg")
 texture2 = loadImage("./assets/water.jpg")
 texture3 = loadImage("./assets/fire.jpg")
 texture4 = loadImage("./assets/grass.jpg")
 texture5 = loadImage("./assets/space.jpg")
}

function setup() {
    createCanvas(800, 800, WEBGL);
}

function draw() {

    background(120);

    textFont(myFont);
    textSize(36);
    text("Jarrett Kulpas", 250, 350);

    createBox();
    createTorus();
    createEliipsoid();
    createCylinder();
    createCone();

    text('Wacky Shapes', -300,-350)
  }
  
  function createBox()
  {
    push();
    texture(texture1);
    translate(100,100);
    rotateX(frameCount * 0.02)
    rotateZ(frameCount * 0.04)
    box(50,50,50)
    pop();

  }
  function createTorus()
  {
    push();
    texture(texture3);
    noStroke();
    translate(-100,-100)
    rotateX(frameCount * 0.04)
    rotateY(frameCount * 0.04)
    torus(50,10,10)
    pop();
  }
  function createEliipsoid()
  {
    push();
    texture(texture2);
    noStroke();
    translate(100,-200)
    rotateY(frameCount * 0.02)
    ellipsoid(50, 75,50, 15, 15);
    pop();
  }
  function createCylinder()
  {
    push();
    texture(texture4);
    noStroke();
    translate(-200,-200)
    rotateX(frameCount * 0.04)
    rotateY(frameCount * 0.02)
    rotateZ(frameCount * 0.1)
    cylinder(20,20,20)
    pop();
  }
  function createCone()
  {
    push();
    texture(texture5);
    noStroke();
    translate(-200,200)
    rotateX(frameCount * 0.05)
    rotateY(frameCount * 0.07)
    rotateZ(frameCount * 0.09)
    cone(50,70)
    pop();
  }
  
