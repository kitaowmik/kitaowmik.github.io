var ballx = 150;
var bally = 150;
var ballSize = 100;
var score =0;
var gameState= "L1";
var img1;
var img2;
var img3;
var img4;
var img5;
let particles = [];

function preload() {
img1 = loadImage('https://kitaowmik.github.io/images/background1.jpg');
img2 = loadImage('https://kitaowmik.github.io/images/background2.jpg');
img3 = loadImage('https://kitaowmik.github.io/images/background3.jpg');
img4 = loadImage('https://kitaowmik.github.io/images/navi.png');
img5 = loadImage('https://kitaowmik.github.io/images/background4.gif');
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
  background(img1);


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
  line(ballx, bally, mouseX, mouseY);
/*    for (let i = 0; i < 5; i++) {
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
  }*/
  
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
   ballx = ballx + random (-5,5);
   bally = bally - random (-1, 0);
   if (bally < 0 || bally > 600 || ballx < 0 || ballx > 600) {
     ballx = 300;
     bally = 300;
   }
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +2;
  }
  if(score>15){
// level 4
   gameState = "L4";
   
  }
  

  image(img4, ballx, bally, ballSize, ballSize);
} // end level three

function levelFour(){
  background(img5);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
   ballx = ballx + random (-5,5);
   bally = bally - random (-5, 5);
   if (bally < 0 || bally > 600 || ballx < 0 || ballx > 600) {
     ballx = random(width/2);
     bally = random(height/2);
   }
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>20){
// ending
   gameState = "END";
   
  }
  

  image(img4, ballx, bally, ballSize, ballSize);
}

/*function mouseClicked() {
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +2;
  } else {
    score= score -1
  }
}*/



/*class Particle {
  constructor() {
    this.x = ballx;
    this.y = bally;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
  }


  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  show() {
    image(img4,ballx, bally, 16);
  }
}*/
