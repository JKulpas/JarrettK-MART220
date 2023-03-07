var myAnimations;
var iceCream;
var icecream1;
var icecream2;
var r1;
var r2;
var iceCreams = [];
var animations = [];
var animationsWalk = [];
var c = 0;
var i = 0;
var j = 0;
var counter = 0;
var idlePaths = [];
var walkPaths = [];
var isColliding = false;
var isColliding2 = false;
var points = 0;
var sounds;

function preload()
{
  idlePaths = loadStrings("./assets/idle.txt");
  walkPaths = loadStrings("./assets/walk.txt");
  winSound = loadSound("./sounds/Winning Sound Effect.mp3");
  badSound = loadSound("./sounds/Wrong Buzzer Sound Effect.mp3");
  backgroundSound = loadSound("./sounds/Outro sound meme.mp3");
}

function setup() {
  createCanvas(800, 600);

  icecream1 = new iceCreamFood(100, 500, 80, 80);
  icecream2 = new iceCreamFood(600, 200, 80, 80);
  r1 = new myRectangle(600,100,80,20);
  r2 = new myRectangle(100,210,30,20);

  for(var i = 0; i < idlePaths.length; i++) 
  {
    myAnimations = new animationZombie(idlePaths, 0, 0, 150, 150);
    //animations[i] = myAnimations; 
  }

  for(var i = 0; i < walkPaths.length; i++) 
  {
  animationsWalk = new animationZombie(walkPaths, 0, 0, 150, 150);
    //animationsWalk[i] = myAnimations;
  }
}



function draw() {
  background(0,0,0);
  setCenter(0, 0);
    polarTriangles(6, 50, 100);

  //iceCreams[c] .drawIceCream();

  icecream1.drawIceCream();
  r1.draw();

  fill(255, 255, 255)
  text(isColliding, 300,300);
  text(isColliding2, 300,400);
  text(points, 700, 25)
  text('Health', 650, 25)

if(keyIsPressed)
{
  if(key == 'd')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    isColliding2 = animationsWalk.isIceCreamColliding(icecream1);
    isColliding = animationsWalk.isRectanglesColliding(r1);
    animationsWalk.updatePositions('forward');
    myAnimations.updatePositions('forward')
  }
  else if(key == 'a')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    isColliding2 = animationsWalk.isIceCreamColliding(icecream1);
    isColliding = animationsWalk.isRectanglesColliding(r1);
    animationsWalk.updatePositions('backwards');
    myAnimations.updatePositions('backwards')
  }
  else if(key =='w')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    isColliding2 = animationsWalk.isIceCreamColliding(icecream1);
    isColliding = animationsWalk.isRectanglesColliding(r1);
    animationsWalk.updatePositions('up');
    myAnimations.updatePositions('up')
  }
  else if(key == 's')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    isColliding2 = animationsWalk.isIceCreamColliding(icecream1);
    isColliding = animationsWalk.isRectanglesColliding(r1);
    animationsWalk.updatePositions('down');
    myAnimations.updatePositions('down')
    
  }
  else
  {
  myAnimations.updatePositions('idle');
  myAnimations.setCurrentFrameCount(frameCount);
  myAnimations.drawAnimation();
  }
}
else
{
myAnimations.setCurrentFrameCount(frameCount);
myAnimations.drawAnimation();
}

if(icecream1 && isColliding2 == true)
{
  points += 1;
  icecream1 = new iceCreamFood(random(10, width), random(600, length), 80, 80);
  winSound.play();
}
if(r1 && isColliding == true)
{
  points -= 1;
  r1 = new myRectangle(random(10, width), random(600, length), 80, 20);
  badSound.play();
}


}

function mousePressed() {
 
  backgroundSound.loop();
}

