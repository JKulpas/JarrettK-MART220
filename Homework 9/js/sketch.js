
function setup() {
    createCanvas(800, 800, WEBGL);
   
}

function draw() {

    background(120);

    createBox();
    createTorus();
    createEliipsoid();
    createCylinder();
    createCone();
  }
  
  function createBox()
  {
    push();
    translate(100,100);
    rotateX(frameCount * 0.02)
    rotateZ(frameCount * 0.04)
    box(50,50,50)
    pop();

  }
  function createTorus()
  {
    push();
    translate(-100,-100)
    rotateX(frameCount * 0.04)
    rotateY(frameCount * 0.04)
    torus(50,10,10)
    pop();
  }
  function createEliipsoid()
  {
    push();
    translate(100,-200)
    rotateY(frameCount * 0.02)
    ellipsoid(50, 75,50, 15, 15);
    pop();
  }
  function createCylinder()
  {
    push();
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
    translate(-200,200)
    rotateX(frameCount * 0.05)
    rotateY(frameCount * 0.07)
    rotateZ(frameCount * 0.09)
    cone(50,70)
    pop();
  }
  
