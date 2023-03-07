class iceCreamFood {
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
      return this.w;
    }
    getH()
    {
      return this.h;
    }

 drawIceCream(){
        noStroke();
        fill(128,75,18)
        ellipse(this.x,this.y-60, 70, 70)
        fill(255,255,255)
        ellipse(this.x,this.y-30, 75, 75)
        fill(255,153,180)
        ellipse(this.x,this.y,this.w, this.h)
        
      
        fill(205,133,63)
        stroke(1);
        strokeWeight(0.3);
        triangle(this.x-41,this.y+6,this.x+41,this.y+6,this.x,this.y+90,)
        
    }
}
