var myAnimations;
var iceCream;
var iceCreams = [];
var animations = [];
<<<<<<< HEAD
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
=======
var animationRun = [];
var c = 0;
var i = 0;
var counter = 0;
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7

function setup() {
  createCanvas(800, 600);

<<<<<<< HEAD
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
=======
  myAnimations = new animationZombie("./assets/Idle (1).png", 400, 300, 150, 150);
    animations[0] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (2).png", 400, 300, 150, 150);
    animations[1] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (3).png", 400, 300, 150, 150);
    animations[2] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (4).png", 400, 300, 150, 150);
    animations[3] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (5).png", 400, 300, 150, 150);
    animations[4] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (6).png", 400, 300, 150, 150);
    animations[5] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (7).png", 400, 300, 150, 150);
    animations[6] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (8).png", 400, 300, 150, 150);
    animations[7] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (9).png", 400, 300, 150, 150);
    animations[8] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (10).png", 400, 300, 150, 150);
    animations[9] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (11).png", 400, 300, 150, 150);
    animations[10] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (12).png", 400, 300, 150, 150);
    animations[11] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (13).png", 400, 300, 150, 150);
    animations[12] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (14).png", 400, 300, 150, 150);
    animations[13] = myAnimations;
  myAnimations = new animationZombie("./assets/Idle (15).png", 400, 300, 150, 150);
    animations[14] = myAnimations;

    setInterval(incrementIdleIndex, 90)
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7

    for(var c = 0; c < 5; c++)
    {
      iceCream = new iceCreamFood(random(10, width), random(600, length));
      iceCreams[c] = iceCream;
    }
}



function draw() {
  background(0,0,0);


<<<<<<< HEAD
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
=======
  animations[i].drawAnimation();

  iceCreams[c] .drawIceCream();
}

function incrementIdleIndex()
{
  i++;
  if(i >= animations.length)
  {
    i = 0;
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7
  }
}
else
{
myAnimations.setCurrentFrameCount(frameCount);
myAnimations.drawAnimation();
}
}