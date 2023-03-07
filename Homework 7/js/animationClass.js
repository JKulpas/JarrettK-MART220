class animationZombie {
    constructor(paths, x, y, w, h) 
  {
    this.paths = paths;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.i = 0;
    this.animationObjects = [];
    this.loadAnimations()
    this.currentFrameCount = 0;
}

getX()
{
    return this.x;
}

getY()
{
    return this.y;
}
getW()
{
    return this.w
}
getH()
{
    return this.h
}

setCurrentFrameCount(currentFrameCount)
{
    this.currentFrameCount = currentFrameCount;
}

 loadAnimations()
 {
    for(var i = 0; i < this.paths.length; i++)
    {
       this.animationObjects[i] = loadImage(this.paths[i]);
    }
 }

 drawAnimation()
 {
    this.incrementIndex();
    if(this.direction == "backwards")
    {
        translate(this.w,0);
        scale(-1.0,1.0);
        image(this.animationObjects[this.i], -this.x, this.y, this.w, this.h);
    }
    else
    {
        image(this.animationObjects[this.i], this.x, this.y, this.w, this.h);
    }
 }

 incrementIndex()
{
    if(this.currentFrameCount % 5 == 0)
  this.i++;
  if(this.i >= this.paths.length)
  {
    this.i = 0;
  }
}

updatePositions(direction)
{
    this.direction = direction;
    if(direction == "forward")
    {
        this.x += 1;
    }
    else if(direction == "backwards")
    {
        this.x -= 1;
    }
    else if(direction == "up")
    {
        this.y -= 1;
    }
    else if(direction == "down")
    {
        this.y += 1;
    }
}

isRectanglesColliding(rec2){
    var topEdge1 = this.y + this.h;
    var rightEdge1 = this.x + this.w; 
    var leftEdge1 = this.x;
    var bottomEdge1 = this.y;
    var topEdge2 = rec2.getY() + rec2.getH();
    var rightEdge2 = rec2.getX() + rec2.getW(); 
    var leftEdge2 = rec2.getX();
    var bottomEdge2 = rec2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
        return true; 
   }
   return false;
  }

  isIceCreamColliding(icecream2){
    var topEdge1 = this.y + this.h;
    var rightEdge1 = this.x + this.w; 
    var leftEdge1 = this.x;
    var bottomEdge1 = this.y;
    var topEdge2 = icecream2.getY() + icecream2.getH();
    var rightEdge2 = icecream2.getX() + icecream2.getW(); 
    var leftEdge2 = icecream2.getX();
    var bottomEdge2 = icecream2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
        return true; 
   }
   return false;
  }
}
