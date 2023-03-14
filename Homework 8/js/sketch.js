var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var badImage;
var goodImage; 
var goodHealthImage;
var isColliding = false;
var points = 0;
var imovableObject1;
var imovableObject2;
var imovableObject3;
var health = 5;



function preload() {
    idlePaths = loadStrings("./assets/idle.txt");
    walkPaths = loadStrings("./assets/walk.txt");
}

function setup() {
    createCanvas(800, 800);
    myAnimation = new animationImage(0, 0, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);

    goodImage = createSprite(random(10, width), random(10,800),100,100, 'static');
    goodImage.img = "./images/coinimage.png";
    goodImage.scale = 0.05;
    goodImage.diameter = 150;

    badImage = createSprite(random(10,width), random(10,800),100,100, 'static');
    badImage.img = "./images/badimage.png";
    badImage.scale = 0.05;
    badImage.diameter = 150;

    goodHealthImage = createSprite(random(10,width), random(10,800),100,100, 'static');
    goodHealthImage.img = "./images/goodHealthImage.png";
    goodHealthImage.scale = 0.05;
    goodHealthImage.diameter = 150;
   
    imovableObject1 = createSprite(random(0,800), random(0,800), 100, 100, 'static');
    
    imovableObject2 = createSprite(random(0,800), random(0,800), 100, 100, 'static');
    
    imovableObject3 = createSprite(random(0,800), random(0,800), 100, 100, 'static');
}

function draw() {

    background(120);

    text('Points', 650, 100)
    text(points, 700, 100)
    text(health, 600, 100)
    text('Health', 550, 100)

    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }     
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(goodHealthImage))
        {
            health += 2;
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(goodHealthImage))
        {
            health += 2;
        }
    }
    else if (kb.pressing('w')) {
      myAnimation.updatePosition('up');
      myAnimation.drawAnimation('walk');
      if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(goodHealthImage))
        {
            health += 2;
        }
  }
    else if (kb.pressing('s')) {
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
    if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(goodHealthImage))
        {
            health += 2;
        }
  }
    else {
        myAnimation.drawAnimation('idle');
    }
    goodImage.debug = mouseIsPressed;

    if(health <= -1){
        text('You Lose',375,200)
        
    }
    if(points >= 10){
        text('You Win', 375,200)
    }

  }

