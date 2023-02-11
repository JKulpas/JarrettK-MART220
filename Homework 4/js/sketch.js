var playerX = 195;
var playerY = 80;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var ranX1 =1;
var ranY1 =1;
var ranX2 =1;
var ranY2 =1;
var ranX3 =1;
var ranY3 =1;

var boyZombie
var zombieArray = [];
var zombieObjects = [];

function preload () {
  
  
  boyZombie = new zombieClass('assets/Idle (1).png', 0, 0);
    zombieObjects[0] = zombie;
  boyZombie = new zombieClass('assets/Idle (2).png', 0, 0);
    zombieObjects[1] = zombie; 
}

function setup() {
  createCanvas(400, 400);

   ranXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   ranYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  ranX1+=random(400);
  ranY1+=random(400);
  ranX2+=random(400);
  ranY2+=random(400);
  ranX3+=random(400);
  ranY3+=random(400);
}

function draw() {
  background(0,0,0);
  
  randomObjects();
  scoops();
  coneShape();
  scoopsOverlap();
  moveCharacter();
  characterLoop();
  randomSpeeds();
  randomLoops();
 
  function characterLoop()
  {
  if(playerX > width)
    {
        playerX = 0;
    }
    if(playerX < 0)
    {
        playerX = width;
    }
    if(playerY > height)
    {
        playerY = 0;
    }
    if(playerY < 0)
    {
       playerY = height;
    }
  }
  function randomLoops()
  {
  if(ranX1 > width)
    {
        ranX1 = 0;
    }
    if(ranX1 < 0)
    {
        ranX1 = width;
    }
    if(ranY1 > height)
    {
        ranY1= 0;
    }
     if(ranY1 < 0)
    {
        ranY1 = height;
    }
    if(ranX2 > width)
    {
        ranX2 = 0;
    }
    if(ranX2 < 0)
    {
        ranX2 = width;
    }
    if(ranY2 > height)
    {
        ranY2 = 0;
    }
    if(ranY2 < 0)
    {
        ranY2 = height;
    }
    if(ranX3 > width)
    {
        ranX3 = 0;
    }
    if(ranX3 < 0)
    {
        ranX3 = width;
    }
    if(ranY3 > height)
    {
        ranY3 = 0;
    }
    if(ranY3 < 0)
    {
        ranY3 = height;
    }
  }

  function scoops(){
  
  noStroke();
  fill(128,75,18)
  ellipse(195,120,70)
  rect(205,120,20,35)
  fill(255,255,255)
  ellipse(195,160,75)
  fill(255,153,180)
  noStroke();
  ellipse(195,200,80)
  }
  function coneShape(){
  fill(205,133,63)
  stroke(1);
  strokeWeight(0.3);
  //waffle cone first level
  triangle(155,210,195,300,235,210)
  triangle(155,210,165,230,175,210)
  triangle(165,230,175,210,185,230)
  triangle(175,210,185,230,195,210)
  triangle(185,230,195,210,205,230)
  triangle(195,210,205,230,215,210)
  triangle(205,230,215,210,225,230)
  triangle(215,210,225,230,235,210)
  //waffel cone second level
  triangle(165,230,173,250,185,230)
  triangle(173,250,185,230,195,250)
  triangle(185,230,195,250,205,230)
  triangle(195,250,205,230,217,250)
  triangle(205,230,217,250,225,230)
  //waffel cone third level
  triangle(175,250,182,270,195,250)
  triangle(182,270,195,250,208,270)
  triangle(195,250,208,270,215,250)
  //waffel cone last level
  triangle(182,270,195,298,208,270)
  }
  
  function scoopsOverlap(){
  noStroke();
  fill(128,75,18)
  rect(205,120,10,25)
  ellipse(210,145,10)
  fill(255,255,255)
  rect(175,150,10,35)
  ellipse(180,183,10)
  fill(255,153,180)
  rect(195,205,10,25)
  ellipse(200,230,10)
  }
  
  function randomObjects(){
    fill(255,0,0)
  circle(playerX,playerY,20)
   circle(ranX1,ranY1,25)
  circle(ranX2,ranY2,40)
  circle(ranX3,ranY3,50)
  }
  
  function moveCharacter() 
{
    if(keyIsDown(w))
    {
      playerY -= 2;   
    }
   if(keyIsDown(s))
    {
        playerY += 2;   
    }
    if(keyIsDown(a))
    {
        playerX -= 2;   
    }
    if(keyIsDown(d))
    {
        playerX += 2;   
    }
}
  function randomSpeeds()
  {
  ranX1 += ranXSpeed;
  ranY1 -= ranYSpeed;
  ranX2 -= ranXSpeed;
  ranY2 += ranYSpeed;
  ranX3 += ranXSpeed;
  ranY3 -= ranYSpeed;
  }

  fill(255,255,255)
  textSize(20)
  text("Jarrett Kulpas",250,390)
  text("Ice Cream",25,25)
}
