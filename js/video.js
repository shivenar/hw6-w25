var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	//Initialize video element
	video = document.getElementById("player1");

	//Explicitly turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;

	//Set default volume to 100% (1.0)
	video.volume = 1.0;

	//Load video to apply autoplay/loop settings
	video.load();

	//Update volume display on load
	updateVolumeDisplay();

	//Play Button
	document.getElementById("play").addEventListener("click", function () {
		video.play();
		updateVolumeDisplay(); // in case volume was muted/unmuted before playing
		console.log("Play Video");
	});

	//Pause Button
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});

	//Slow Down
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	//Speed Up
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	//Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		console.log("Original location: " + video.currentTime.toFixed(2));
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Skipped to beginning");
		} else {
			video.currentTime += 10;
			console.log("New location: " + video.currentTime.toFixed(2));
		}
	});

	//Mute / Unmute
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.textContent = video.muted ? "Unmute" : "Mute";
	});

	//Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		updateVolumeDisplay();
	});

	//Vintage Style Button
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	//Original Style Button
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});

//Helper to show current volume
function updateVolumeDisplay() {
	const volumePercent = Math.round(video.volume * 100) + "%";
	document.getElementById("volume").textContent = volumePercent;
}
