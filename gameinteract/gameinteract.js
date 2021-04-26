var ballx = 150;
var bally = 150;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img1;
var img2;
var img3;
var img4;
let particles = [];

function preload() {
img1 = loadImage('https://kitaowmik.github.io/images/background1.jpg');
img2 = loadImage('https://kitaowmik.github.io/images/background2.jpg');
img3 = loadImage('https://kitaowmik.github.io/images/background3.jpg');
img4 = loadImage('https://kitaowmik.github.io/images/navi.png');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  //background(0);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

}// end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  background(255);


  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(img4,ballx, bally, ballSize, ballSize);
 // line(ballx, bally, mouseX, mouseY);
    for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = 0; i < particles.length; i++) {
    particles [i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
  
} // end level one

function levelTwo(){
  background(img2);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  

  image(img4,ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(img3);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +2;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  

  image(img4, ballx, bally, ballSize, ballSize);
} // end level three

class Particle {
  constructor() {
    this.x = 300;
    this.y = 380;
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
    //stroke(255);
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}
