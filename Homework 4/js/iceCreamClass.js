class iceCreamFood {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

 drawIceCream(){
        noStroke();
        fill(128,75,18)
        ellipse(this.x,this.y-60,70)
        fill(255,255,255)
        ellipse(this.x,this.y-30,75)
        fill(255,153,180)
        ellipse(this.x,this.y,80)
        
      
        fill(205,133,63)
        stroke(1);
        strokeWeight(0.3);
        triangle(this.x-41,this.y+6,this.x+41,this.y+6,this.x,this.y+90)
        
    }
}