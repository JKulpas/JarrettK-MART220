function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  
  noStroke();
  fill(128,75,18)
  ellipse(195,120,70)
  rect(205,120,20,35)
  fill(255,255,255)
  ellipse(195,160,75)
  fill(255,153,180)
  noStroke();
  ellipse(195,200,80)
  fill(128,75,18)
  rect(205,120,10,25)
  ellipse(210,145,10)
  fill(255,255,255)
  rect(175,150,10,35)
  ellipse(180,183,10)
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
  noStroke();
  fill(255,153,180)
  rect(195,205,10,25)
  ellipse(200,230,10)
}

