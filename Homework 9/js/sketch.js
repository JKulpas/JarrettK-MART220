var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var attackPaths = [];
var goodImage;
var goodImage2;
var goodImage3;
var goodImage4;
var goodImage5;
var isColliding = false;
var imovableObject1;
var particles = [];
var candy1health = 100;
var candy2health = 100;
var candy3health = 100;
var candy4health = 100;
var candy5health = 100;



function preload() {
    idlePaths = loadStrings("./assets/idle.txt");
    walkPaths = loadStrings("./assets/walk.txt");
    attackPaths = loadStrings("./assets/attack.txt");
}

function setup() {
    createCanvas(800, 800);
    myAnimation = new animationImage(0, 0, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);

    goodImage = createSprite(random(10, width), random(10, 800), 100, 100, 'static');
    goodImage.img = "./images/candy1.png";
    goodImage.scale = 0.05;
    goodImage.diameter = 150;
    goodImage2 = createSprite(random(10, width), random(10, 800), 100, 100, 'static');
    goodImage2.img = "./images/candy2.png";
    goodImage2.scale = 0.05;
    goodImage2.diameter = 150;
    goodImage3 = createSprite(random(10, width), random(10, 800), 100, 100, 'static');
    goodImage3.img = "./images/candy3.png";
    goodImage3.scale = 0.05;
    goodImage3.diameter = 150;
    goodImage4 = createSprite(random(10, width), random(10, 800), 100, 100, 'static');
    goodImage4.img = "./images/candy4.png";
    goodImage4.scale = 0.05;
    goodImage4.diameter = 150;
    goodImage5 = createSprite(random(10, width), random(10, 800), 100, 100, 'static');
    goodImage5.img = "./images/candy5.png";
    goodImage5.scale = 0.05;
    goodImage5.diameter = 150;

    imovableObject1 = createSprite(random(0, 800), random(0, 800), 100, 100, 'static');

}

function draw() {

    background(120);

    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if (goodImage != null) {
            if (myAnimation.isColliding(goodImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
        }
        if (goodImage2 != null) {
            if (myAnimation.isColliding(goodImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage3 != null) {
            if (myAnimation.isColliding(goodImage3)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage4 != null) {
            if (myAnimation.isColliding(goodImage4)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage5 != null) {
            if (myAnimation.isColliding(goodImage5)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        if (goodImage != null) {
            if (myAnimation.isColliding(goodImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
        }
        if (goodImage2 != null) {
            if (myAnimation.isColliding(goodImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage3 != null) {
            if (myAnimation.isColliding(goodImage3)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage4 != null) {
            if (myAnimation.isColliding(goodImage4)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage5 != null) {
            if (myAnimation.isColliding(goodImage5)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('w')) {
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        if (goodImage != null) {
            if (myAnimation.isColliding(goodImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');

            }
        }
        if (goodImage2 != null) {
            if (myAnimation.isColliding(goodImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage3 != null) {
            if (myAnimation.isColliding(goodImage3)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage4 != null) {
            if (myAnimation.isColliding(goodImage4)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage5 != null) {
            if (myAnimation.isColliding(goodImage5)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('s')) {
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        if (goodImage != null) {
            if (myAnimation.isColliding(goodImage)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage2 != null) {
            if (myAnimation.isColliding(goodImage2)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage3 != null) {
            if (myAnimation.isColliding(goodImage3)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage4 != null) {
            if (myAnimation.isColliding(goodImage4)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
        if (goodImage5 != null) {
            if (myAnimation.isColliding(goodImage5)) {
                myAnimation.drawAnimation('idle');
                myAnimation.updatePosition('idle');
            }
        }
    }
    else if (kb.pressing('f')) {
        myAnimation.drawAnimation('attack');
        if (goodImage != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, goodImage.position.x, goodImage.position.y) < 200) {
                createParticles(goodImage.position.x, goodImage.position.y);
                candy1health -= 1;
                if (candy1health <= 0) {
                    goodImage.remove();
                    goodImage = null;
                }
            }
        }
        if (goodImage2 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, goodImage2.position.x, goodImage2.position.y) < 200) {
                createParticles(goodImage2.position.x, goodImage2.position.y);
                candy2health -= 1;
                if (candy2health <= 0) {
                    goodImage2.remove();
                    goodImage2 = null;
                }
            }
        }
        if (goodImage3 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, goodImage3.position.x, goodImage3.position.y) < 200) {
                createParticles(goodImage3.position.x, goodImage3.position.y);
                candy3health -= 1;
                if (candy3health <= 0) {
                    goodImage3.remove();
                    goodImage3 = null;
                }
            }
        }
        if (goodImage4 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, goodImage4.position.x, goodImage4.position.y) < 200) {
                createParticles(goodImage4.position.x, goodImage4.position.y);
                candy4health -= 1;
                if (candy4health <= 0) {
                    goodImage4.remove();
                    goodImage4 = null;
                }
            }
        }
        if (goodImage5 != null) {
            if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, goodImage5.position.x, goodImage5.position.y) < 200) {
                createParticles(goodImage5.position.x, goodImage5.position.y);
                candy5health -= 1;
                if (candy5health <= 0) {
                    goodImage5.remove();
                    goodImage5 = null;
                }
            }
        }
    }
    else {
        myAnimation.drawAnimation('idle');
    }

    if(goodImage == null && goodImage2 == null && goodImage3 == null && goodImage4 == null && goodImage5 == null)
    {
        alert("You Win")
    }

}
function createParticles(x, y) {
    for (let i = 0; i < 5; i++) {
        let p = new Particle(x, y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}
