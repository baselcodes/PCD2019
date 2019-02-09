var mic, fft;
var numSamples = 128;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0.9, numSamples);
	fft.setInput(mic);

	colorMode(HSB);
}

function draw() {
	background(0);

	var volume = mic.getLevel() * 1000;
	var spectrum = fft.analyze();

	console.log(volume);

	for(var i = 0; i < spectrum.length; i++) {
		var x = map(i, 0, spectrum.length - 1, 0, width);
		var y = map(spectrum[i], 0, 255, 0, height);

		var size = map(spectrum[i], 0, 255, 10, height);

		var c = map(volume, 0, 500, 0, 255);
		fill(255, c, 255);
		rectMode(CENTER);
		rect(x, height/2, 2, size);
	}

	// fill(0, 0, 255);
	// ellipse(width/2, height/2, volume, volume);


}