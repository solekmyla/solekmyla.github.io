
var filename = 'img0013.jpg';
var zoomLevel = 2;
var imgWidth = 255 * zoomLevel;
var imgHeight = 255 * zoomLevel;
var squareSize = imgWidth/2;

function preload() {
  img = loadImage('assets/' + filename);
}

function setup() {
  createCanvas(imgWidth, imgHeight);
  background(51);
  x_left = round(imgWidth/2) - round(squareSize/2);
  y_top = round(imgHeight/2) - round(squareSize/2);
}

function draw() {
  background(img);
  textSize(round(imgWidth/zoomLevel/2));
  textAlign(CENTER, CENTER);

  noFill();
  stroke(255, 120, 0);
  rect(x_left, y_top, round(squareSize), round(squareSize));
  fill(255, 120, 0)
  text('1', x_left + round(squareSize/2), y_top + round(squareSize/2))

  stroke(255, 0, 0);
  fill(255, 0, 0)
  line(round(imgWidth/2), 0, round(imgWidth/2), imgHeight);

  text('2', round(imgWidth/4), round(imgHeight/4));
  text('3', 3 * round(imgWidth/4), round(imgHeight/4));
  text('4', round(imgWidth/4), 3 * round(imgHeight/4));
  text('5', 3 * round(imgWidth/4), 3 * round(imgHeight/4));
  line(0, round(imgHeight/2), imgWidth, round(imgHeight/2));

  if (mouseIsPressed) {
    var x_right = x_left + round(squareSize);
    var y_bottom = y_top + round(squareSize);




    if (mouseX >= x_left && mouseX <= x_right) {
      if (mouseY >= y_top && mouseY <= y_bottom) {
        x_left = mouseX - round(squareSize/2);
        y_top  = mouseY - round(squareSize/2);
      }
    }

  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    x_left = round(imgWidth/2) - round(squareSize/2);
    y_top = round(imgHeight/2) - round(squareSize/2);
  }
}

function mouseReleased() {
  firstClick = true;
}
