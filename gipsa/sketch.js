
var x = 0, y = 0, r, angle;

function preload() {
  img = loadImage('assets/img0013.jpg');
}

function setup() {
  createCanvas(900, 900);
  zoomLevel = 3;
  imgWidth = 255 * zoomLevel;
  imgHeight = 255 * zoomLevel;
  squareSize = imgWidth/2;


  image(img, 0, 0, imgWidth, imgHeight);

  stroke(255, 0, 0);
  line(round(imgWidth/2), 0, round(imgWidth/2), imgHeight);
  line(0, round(imgHeight/2), imgWidth, round(imgHeight/2));

  noFill();
  stroke(255, 120, 0)
  x_topLeft = round(imgWidth/2) - squareSize/2;
  y_topLeft = round(imgHeight/2) - squareSize/2;

  rect(x_topLeft, y_topLeft, squareSize, squareSize);



}

function draw() {

}
