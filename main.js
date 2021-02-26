function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  background(r, g, b);
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  /* pa = pow(mouseX-pmouseX, 2);
  pb = pow(mouseY-pmouseY, 2);
  speed = sqrt(pa-pb); */
  fill(r, g, b);
  circle(mouseX+random(-10, 10), mouseY+random(-10, 10), random(30));
  
}


function mousePressed() {
  background(r, g, b);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(r, g, b)
}