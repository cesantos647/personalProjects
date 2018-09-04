var circles = [];

var circleRadius = 75

var canvasWidth = 1000;

var canvasHeight = 1000;

function circle(xPos, xVel, xAcc, yPos, yVel, yAcc) {

	this.xPos = xPos || random(100, 900);//(canvasWidth/2);

	this.xVel = xVel || random(3, 15);

	this.xAcc = xAcc || 0;

	this.yPos = yPos || random(100,900);//0;

	this.yVel = yVel || random(3, 15);

	this.yAcc = yAcc || 5;

}

function addCirc() {

	circles.push(new circle());

}

function lines() {
	
	stroke(200);
	
	for(var a = 0; a < circles.length; a++) {

		for(var b = 0; b < circles.length; b++) {

			line(circles[a].xPos, circles[a].yPos, circles[b].xPos, circles[b].yPos);


		}

	}

}

function gravity() {

	background(0,0,0);

	lines();

	for(var forEachCircle = 0; forEachCircle < circles.length; forEachCircle++) {

		ellipse(circles[forEachCircle].xPos, circles[forEachCircle].yPos, circleRadius);

		if((circles[forEachCircle].yPos + (circleRadius + 5)) >= canvasHeight || (circles[forEachCircle].yPos + (circleRadius + 5)) <= 0){

			if(circles[forEachCircle].yVel >= circles[forEachCircle].yAcc){

				circles[forEachCircle].yVel = -(circles[forEachCircle].yVel - circles[forEachCircle].yAcc);

				circles[forEachCircle].yVel += circles[forEachCircle].yAcc;

				circles[forEachCircle].yPos += circles[forEachCircle].yVel;

			}

		} else {

			circles[forEachCircle].yVel += circles[forEachCircle].yAcc;

			circles[forEachCircle].yPos += circles[forEachCircle].yVel;

		}

		if((circles[forEachCircle].xPos + (circleRadius + 5)) >= canvasWidth || (circles[forEachCircle].xPos - (circleRadius + 5)) <= 0){

			circles[forEachCircle].xVel = -(circles[forEachCircle].xVel);

			circles[forEachCircle].xPos += circles[forEachCircle].xVel;

		} else {

			circles[forEachCircle].xPos += circles[forEachCircle].xVel;

		}

	}

}

function nonGravity() {

	background(0,0,0);

	findArea();

	lines();

	for(var forEachCircle = 0; forEachCircle < circles.length; forEachCircle++) {

		if(circles[forEachCircle].xPos >= canvasWidth || circles[forEachCircle].xPos <= 0) {

			circles[forEachCircle].xVel = -circles[forEachCircle].xVel;

		} 

		if(circles[forEachCircle].yPos >= canvasHeight || circles[forEachCircle].yPos <= 0) {

			circles[forEachCircle].yVel = -circles[forEachCircle].yVel;

		}

		circles[forEachCircle].xPos += circles[forEachCircle].xVel;

		circles[forEachCircle].yPos += circles[forEachCircle].yVel;

		ellipse(circles[forEachCircle].xPos, circles[forEachCircle].yPos, circleRadius);

	}

}

function findArea() {

	if(circles.length === 3) {
		var A = circles[0].xPos * (circles[1].yPos - circles[2].yPos);
	
		var B = circles[1].xPos * (circles[2].yPos - circles[0].yPos);
	
		var C = circles[2].xPos * (circles[0].yPos - circles[1].yPos);
	
		var total = A + B + C;
	
		var Area = Math.abs(total / 2);
	
		console.log(Area);

		fill(255);
		
		triangle(circles[0].xPos, circles[0].yPos, circles[1].xPos, circles[1].yPos, circles[2].xPos, circles[2].yPos);
	}

}

function setup() {

	createCanvas(canvasWidth, canvasHeight);

	frameRate(50);

}

function draw() {

	if(document.getElementById('checkbox_input').checked === true) {

		gravity();

	} else {
		
		nonGravity();

	}
}