
var x = 0, y = 0, r, angle;

function setup() {
  createCanvas(450,450);

  angleMode(DEGREES);

}
	var i = 0;

function draw() {

	
	background(51);
  	stroke(255);
  	strokeWeight(3)
  	line(width/2,height,width/2,0);
  	line(0,height/2,width,height/2);
  	noStroke();
  	translate(width/2, height/2);
  
	x = mouseX - width/2;
 	y = -mouseY + height/2;	

  	stroke(255);
	strokeWeight(10);
	point(x,-y);
	strokeWeight(1);
	line(0,0,x,-y);
	noFill();
	arc(0, 0, 80, 80, -teta(), 0);
	strokeWeight(0);
	textSize(20);
	fill(255, 255, 255);
	text("r = " + int(rho()), x/2, -y/2);
	text("θ = " + int(teta()) + "°", 50*cos(teta()/2), -50*sin(teta()/2));
	noFill();

	rotation(i);
	i++;

	if (i > 359) {
		i = 0;
	}
}

function rho() {
	return sqrt(x*x + y*y);
}

function teta(noRule) {
		if(x < 0) {
			return atan(y/x) + 180;	
		} else if (y < 0) {
			return atan(y/x) + 360;
		}

	return atan(y/x);

	
}

function rotation (ang) {
	var newTeta = teta() + ang;
	var r = rho();

	var xRot = r * cos(newTeta);
	var yRot = r * sin(newTeta);

	if (newTeta > 360) {
		newTeta -= 360;
	}

	stroke(255,0,0);
	strokeWeight(10);
	point(xRot, -yRot);
	strokeWeight(1);
	line(0,0,xRot,-yRot);
	noStroke();
	fill(255, 0, 0);
  	text("r = " + int(r), +width/2 - 150, +height/2 - 40);
  	text("θ = " + int(newTeta) + "°", +width/2 - 154, +height/2 - 80);
}

function mousePressed () {
 
 // x = 75;
 // y = 90;
}
