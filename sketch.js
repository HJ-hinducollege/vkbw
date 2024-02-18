let colorlist = ['blue', '#03FF0D', 'rgb(255,10,10)'];
let fontSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000");
  
  // Determine appropriate font size based on screen size
  if (displayWidth > displayHeight) { // Landscape orientation (Desktop)
    fontSize = displayWidth / 25; // Adjust the division factor to suit your preference
  } else { // Portrait orientation (Mobile)
    fontSize = displayWidth / 10; // Adjust the division factor to suit your preference
  }
}

function draw() {
  noStroke();

  fill(random(colorlist));
  ellipse(mouseX, mouseY, 80, 80);
  
  // Set text alignment to center
  textAlign(CENTER, CENTER);
  textSize(20);
  text("ERROR: YOUR PRIVACY DOESN'T EXIST", width/2, height/2);
}