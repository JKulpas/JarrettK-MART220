class animationZombie {
<<<<<<< HEAD
    constructor(paths, x, y, w, h) 
  {
    this.paths = paths;
=======
    constructor(path, x, y, w, h) 
  {
    this.path = path;
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
<<<<<<< HEAD
    this.i = 0;
    this.animationObjects = [];
    this.loadAnimations()
    this.currentFrameCount = 0;
=======
    this.zombie = this.loadAnimations();
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7
}

getX()
{
    return this.x;
}

getY()
{
    return this.y;
}

<<<<<<< HEAD
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
=======
 loadAnimations()
 {
    return loadImage(this.path);
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7
 }

 drawAnimation()
 {
<<<<<<< HEAD
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
=======
    image(this.zombie, this.x, this.y, this.w, this.h);
 }
>>>>>>> ca737421e45be569d6a44180b8352a925d6dadd7
}
