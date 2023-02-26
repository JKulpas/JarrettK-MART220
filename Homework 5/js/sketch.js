var myAnimations;
var iceCream;
var iceCreams = [];
var animations = [];
var animationsWalk = [];
var c = 0;
var i = 0;
var j = 0;
var counter = 0;
var idlePaths = [];
var walkPaths = [];
function preload()
{
  idlePaths = loadStrings("./assets/idle.txt");
  walkPaths = loadStrings("./assets/walk.txt");
}

function setup() {
  createCanvas(800, 600);

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

    for(var c = 0; c < 5; c++)
    {
      iceCream = new iceCreamFood(random(10, width), random(600, length));
      iceCreams[c] = iceCream;
    }
}



function draw() {
  background(0,0,0);


  iceCreams[c] .drawIceCream();

if(keyIsPressed)
{
  if(key == 'd')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    animationsWalk.updatePositions('forward');
    myAnimations.updatePositions('forward')
    
  }
  else if(key == 'a')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    animationsWalk.updatePositions('backwards');
    myAnimations.updatePositions('backwards')
  }
  else if(key =='w')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
    animationsWalk.updatePositions('up');
    myAnimations.updatePositions('up')
  }
  else if(key == 's')
  {
    animationsWalk.setCurrentFrameCount(frameCount);
    animationsWalk.drawAnimation();
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
}
