var boyZombie;
var zombieIdle;
var zombieMovement;
var zombieRun;
var zombieObjects = [];
var zombieRunObjects = [];


var counter = 0;


function preload () {


  boyZombie = loadImage('assets/Idle (1).png');
    zombieObjects[0] = boyZombie;
  boyZombie = loadImage('assets/Idle (2).png');
    zombieObjects[1] = boyZombie;
  boyZombie = loadImage('assets/Idle (3).png');
    zombieObjects[2] = boyZombie;
  boyZombie = loadImage('assets/Idle (4).png');
    zombieObjects[3] = boyZombie;
  boyZombie = loadImage('assets/Idle (5).png');
    zombieObjects[4] = boyZombie;
  boyZombie =  loadImage('assets/Idle (6).png');
    zombieObjects[5] = boyZombie;
  boyZombie =  loadImage('assets/Idle (7).png');
    zombieObjects[6] = boyZombie;
  boyZombie =  loadImage('assets/Idle (8).png');
    zombieObjects[7] = boyZombie;
  boyZombie =  loadImage('assets/Idle (9).png');
    zombieObjects[8] = boyZombie;
  boyZombie =  loadImage('assets/Idle (10).png');
    zombieObjects[9] = boyZombie;


  boyZombie =  loadImage('assets/Walk (1).png');
    zombieRunObjects[0] = boyZombie;
  boyZombie =  loadImage('assets/Walk (2).png');
    zombieRunObjects[1] = boyZombie;
  boyZombie =  loadImage('assets/Walk (3).png');
    zombieRunObjects[2] = boyZombie;
  boyZombie =  loadImage('assets/Walk (4).png');
    zombieRunObjects[3] = boyZombie;
  boyZombie =  loadImage('assets/Walk (5).png');
    zombieRunObjects[4] = boyZombie;
  boyZombie = loadImage('assets/Walk (6).png');
    zombieRunObjects[5] = boyZombie;
  boyZombie =  loadImage('assets/Walk (7).png');
    zombieRunObjects[6] = boyZombie;
  boyZombie = loadImage('assets/Walk (8).png');
    zombieRunObjects[7] = boyZombie;
  boyZombie =  loadImage('assets/Walk (9).png');
    zombieRunObjects[8] = boyZombie;
  boyZombie =  loadImage('assets/Walk (10).png');
    zombieRunObjects[9] = boyZombie;
   
}


function setup() {
  createCanvas(400, 400);


zombieMovement = new zombie();
zombieIdle = new zombie();
zombieRun = new zombie();


}


function draw() {
  background(0,0,0);
 
  scoops();
  coneShape();
  scoopsOverlap();
  zombieMovement.movement();
 


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
 


  fill(255,255,255)
  textSize(20)
  text("Jarrett Kulpas",250,390)
  text("Ice Cream",25,25)
}
