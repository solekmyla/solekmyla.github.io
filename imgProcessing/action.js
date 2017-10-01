let imgFFT;
let canvas;
let pixelMatrix;
function setup() {
  let canvasWidth = 4;
  let canvasHeight = 4;
  canvas = createCanvas(canvasWidth,canvasHeight);
  canvas.class("canvasBorder");
  pixelDensity(1);
  // fill(255, 0, 0)
  // noStroke();
  // // ellipse(0, 0, 50, 50);
  // ellipse(canvasWidth, 0, 50, 50);
  // ellipse(0, canvasHeight, 50, 50);
  // ellipse(canvasWidth, canvasHeight, 50, 50);
  background(51);

  loadPixels();
  pixelMatrix = vectorToMatrix(pixels, canvasWidth);
  updatePixels();


}

// function draw() {
//
// imgFFT = rfft2d(imgCanvas.imageData.data, imgCanvas.imageData.width, imgCanvas.imageData.height);
//
// }

function vectorToMatrix (vector, numberOfColumns) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < vector.length; i+=4) {
        if (i % (numberOfColumns*4) == 0) {
            k++;
            matrix[k] = [];
            console.log(i)
        }
        grayMappedValue = floor((vector[i] + vector[i + 1] + vector[i + 2]) / 3);
        matrix[k].push(grayMappedValue);
    }

    return matrix;
}
