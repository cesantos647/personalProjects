var circles = [];

var circleRadius = 50

var canvasWidth = 1000;

var canvasHeight = 1000;

function circle(xPos, xVel, xAcc, yPos, yVel, yAcc) {
	this.xPos = xPos || random(100, 900);//(canvasWidth/2);
	this.xVel = xVel || 20;
	this.xAcc = xAcc || 0;
	this.yPos = yPos || 0;
	this.yVel = yVel || 0;
	this.yAcc = yAcc || 5;
}

function addCirc() {
	circles.push(new circle());
}

function resetCirc() {
	for(var forEachObject = 0; forEachObject < circles.length; forEachObject++) {
		circles[forEachObject].yPos = 0;
		circles[forEachObject].yVel = 0;
		circles[forEachObject].yAcc = 5;
		ellipse(circles[forEachObject].xPos, circles[forEachObject].yPos, circleRadius);
	}
}

function gravity() {
	background(0,0,0);
	for(var forEachCircle = 0; forEachCircle < circles.length; forEachCircle++) {
		ellipse(circles[forEachCircle].xPos, circles[forEachCircle].yPos, circleRadius);
		if((circles[forEachCircle].yPos + (circleRadius + 5)) >= canvasHeight){
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

function collision() {
	for(var forEachCircle = 0; forEachCircle < circles.length; forEachCircle++) {
		for(var forOtherCircles = 0; forOtherCircles < circles.length; forOtherCircles++) {
			if(dist(circles[forEachCircle].xPos, circles[forOtherCircles].xPos, circles[forEachCircle].yPos, circles[forOtherCircles].yPos) >= (2* circleRadius)) {

			}
		}
	}
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	frameRate(50);
}
function draw() {
	gravity();
}