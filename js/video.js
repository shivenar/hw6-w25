var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	//Initialize video element
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.load();

	//Play Button
	document.getElementById("play").addEventListener("click", function () {
		video.play();
		updateVolumeDisplay();
		console.log("Play Video");
	});

	//Pause Button
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});

	//Slow Down Button
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	//Speed Up Button
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	//Skip Ahead Button
	document.getElementById("skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Skipping to beginning");
		} else {
			video.currentTime += 10;
			console.log("Current location: " + video.currentTime.toFixed(2) + " seconds");
		}
	});

	//Mute Button
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
	});

	//Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		updateVolumeDisplay();
	});

	//Vintage Button
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	//Original Button
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});

	//Initial Volume Display
	updateVolumeDisplay();
});

//Helper function to update volume display
function updateVolumeDisplay() {
	var volumePercent = Math.round(video.volume * 100) + "%";
	document.getElementById("volume").textContent = volumePercent;
}
