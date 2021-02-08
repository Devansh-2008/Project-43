var hr;
var mn;
var sc;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  

  hr = hour();
mn = minute();
sc = second();

  angleMode(DEGREES);
  scAngle = map(sc-15,0,60,0,360);
  hrAngle = map(hr-3,0,60,0,360);
  mnAngle = map(mn-15,0,60,0,360);

  noFill();
  strokeWeight(10);
  stroke("red");
  arc(200,200,380,380,990,scAngle);
  stroke(80,250,30);
  arc(200,200,355,355,990,mnAngle);
  stroke("blue");
  arc(200,200,330,330,990,hrAngle);

  push();
  translate(200,200);
  rotate(scAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,150,0);
  pop();

  push();
  translate(200,200);
  rotate(mnAngle);
  stroke(80,250,30);
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  push();
  translate(200,200);
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(10);
  line(0,0,50,0);
  pop();
  
}