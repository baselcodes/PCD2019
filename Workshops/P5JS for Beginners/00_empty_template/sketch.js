
// this executes once at the beginning
function setup() {
	createCanvas(windowWidth, windowHeight);
}

// this executes 60 times a second
function draw() {
	fill(255, 0, 0);
	stroke(0, 0, 255);
	strokeWeight(5);
	rect(10, 20, 50, 50);
}