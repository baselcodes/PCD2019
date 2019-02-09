let video;
let scale = 16; // equal to the resultion of your video

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);

	// capture your webcam and safe it in the variable
	video = createCapture(VIDEO);
	// calculate the size of your video based on you scale
	video.size(width/scale, height/scale);
}

function draw() {
	// load all pixel of your video
	video.loadPixels();  

	// double loop to get x, y of every video pixel.
	for(let y = 0; y < video.height; y++) {
		for(let x = 0; x < video.width; x++) {

			// formula to safe x, y as one variable
			let index = (x + y * video.width) * 4;

			// formula to get r, g, b, values of every pixel
			let r = video.pixels[index+0];
			let g = video.pixels[index+1];
			let b = video.pixels[index+2];

			// formula to make it grayscale
			var color = (r+g+b)/3;

			noFill();
			stroke(color);
			strokeWeight(10);

			// draw a rectangle on every pixel position
			rect(x*scale, y*scale, scale, scale);
		}
	}

}