class animationZombie {
    constructor(path, x, y, w, h) 
  {
    this.path = path;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.zombie = this.loadAnimations();
}

getX()
{
    return this.x;
}

getY()
{
    return this.y;
}

 loadAnimations()
 {
    return loadImage(this.path);
 }

 drawAnimation()
 {
    image(this.zombie, this.x, this.y, this.w, this.h);
 }
}
