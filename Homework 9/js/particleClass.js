class Particle {

    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.vx = random(-1, 1);
      this.vy = random(-5, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      fill(255, this.alpha);
      rect(this.x, this.y, 15, 15);
    }
  }
  
