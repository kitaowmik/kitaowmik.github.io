var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img0;

var initials ='ab'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('https://kitaowmik.github.io/images/light.jpg');
  img2 = loadImage('https://kitaowmik.github.io/images/paint1.gif');
  img3 = loadImage('https://kitaowmik.github.io/images/movie2.gif');
  img4 = loadImage('https://kitaowmik.github.io/images/movie3.gif');
  img5 = loadImage('https://kitaowmik.github.io/images/movie4.gif');
  img6 = loadImage('https://kitaowmik.github.io/images/movie5.gif');
  img7 = loadImage('https://kitaowmik.github.io/images/movie6.gif');
  img8 = loadImage('https://kitaowmik.github.io/images/movie7.gif');
  img9 = loadImage('https://kitaowmik.github.io/images/movie8.gif');
  img0 = loadImage('https://kitaowmik.github.io/images/paint2.gif');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(random(0,50), random(100,200),255);
    image(img1,pmouseX,pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    //stroke(20);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    image(img2,pmouseX,pmouseY);
  } else if (toolChoice == '3') { // third tool

    //stroke(300, 100, 0, 80);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    image(img3,pmouseX,pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    image(img4,pmouseX,pmouseY);
  } else if (key == '5') { // this tool calls a function
    /*stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);*/
    image(img5,pmouseX,pmouseY);
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    /*stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);*/
    image(img6,pmouseX,pmouseY);
  } else if (toolChoice == '7') {

    image(img7,pmouseX,pmouseY);
  } else if (toolChoice == '8') {

    image(img8,pmouseX,pmouseY);
  } else if (toolChoice == '9') {

    image(img9,pmouseX,pmouseY);
  } else if (toolChoice == '0') {
   /* stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);*/
    image(img0,pmouseX,pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
