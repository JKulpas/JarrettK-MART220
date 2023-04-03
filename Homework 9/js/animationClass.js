class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";


    }

    createAnimation() {
        this.currentAnimation = createSprite(this.x, this.y);
    }

    getCurrentAnimation()
    {
        return this.currentAnimation;
    }

    loadAnimation(animationType, fileNames) {

        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        this.currentAnimation.width = 300;
        this.currentAnimation.height = 150;
    }



    drawAnimation(animationType) {
        
        this.currentAnimation.frameDelay = 1000;
        this.currentAnimation.scale = .3;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 5;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 5;

        }
        else if (animationType == 'walk' && this.direction == 'down') {

            this.currentAnimation.mirror.y = false;
            this.currentAnimation.direction = 90;
            this.currentAnimation.speed = 5;
        }
        else if (animationType == 'walk' && this.direction == 'up') {

            this.currentAnimation.mirror.y = false;
            this.currentAnimation.direction = 270;
            this.currentAnimation.speed = 5;

        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }


    }

    updatePosition(direction) {
        this.direction = direction;
       
    }


isColliding(goodImage) {
    return this.currentAnimation.collide(goodImage);
}
isColliding(goodImage2) {
    return this.currentAnimation.collide(goodImage2);
}
isColliding(goodImage3) {
    return this.currentAnimation.collide(goodImage3);
}
isColliding(goodImage4) {
    return this.currentAnimation.collide(goodImage4);
}
isColliding(goodImage5) {
    return this.currentAnimation.collide(goodImage5);
}


}
