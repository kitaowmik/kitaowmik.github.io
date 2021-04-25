var ballx = 200;
var bally = 200;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img1;
var img2;
var img3;
var img4;

function preload() {
img1 = loadImage('https://kitaowmik.github.io/images/background1.jpg');
img2 = loadImage('https://kitaowmik.github.io/images/background2.jpg');
img3 = loadImage('https://kitaowmik.github.io/images/background3.jpg');
img4 = loadImage('https://kitaowmik.github.io/images/navi.png');
/*img5 = loadImage('https://jenstudent.github.io/images/skeleton.png');
img6 = loadImage('https://jenstudent.github.io/images/spider.png');
img7 = loadImage('https://jenstudent.github.io/images/villager3.gif');
img8 = loadImage('https://jenstudent.github.io/images/llama.gif');*/
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(img1);
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
  
//  line(ballx, bally, mouseX, mouseY);
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
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(img4, ballx, bally, ballSize, ballSize);
} // end level three
