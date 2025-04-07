var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window");

	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.volume = 1.0;
	video.load();

	updateVolumeDisplay();

	// Play
	document.getElementById("play").addEventListener("click", function () {
		video.play().then(() => {
			console.log("Play Video");
			updateVolumeDisplay();
		}).catch((error) => {
			console.log("Play failed (probably due to .mov file)");
		});
	});

	// Pause
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});

	// Slow Down
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate = video.playbackRate * 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	// Speed Up
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate = video.playbackRate / 0.9;
		console.log("New speed is: " + video.playbackRate.toFixed(5));
	});

	// Skip Ahead
	document.getElementById("skip").addEventListener("click", function () {
		console.log("Original location: " + video.currentTime.toFixed(2));
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Skipped to beginning");
		} else {
			video.currentTime = video.currentTime + 10;
			console.log("New location: " + video.currentTime.toFixed(2));
		}
	});

	// Mute
	document.getElementById("mute").addEventListener("click", function () {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
			console.log("Unmuted");
		} else {
			video.muted = true;
			this.textContent = "Unmute";
			console.log("Muted");
		}
	});

	// Volume Slider
	document.getElementById("slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		updateVolumeDisplay();
		console.log("Volume set to: " + video.volume.toFixed(2));
	});

	// Vintage
	document.getElementById("vintage").addEventListener("click", function () {
		var vid = document.getElementById("player1");
		vid.classList.add("oldSchool");
		console.log("Old School style applied");
	});

	// Original
	document.getElementById("orig").addEventListener("click", function () {
		var vid = document.getElementById("player1");
		vid.classList.remove("oldSchool");
		console.log("Old School style removed");
	});
});

function updateVolumeDisplay() {
	var percent = Math.round(video.volume * 100);
	document.getElementById("volume").textContent = percent + "%";
}
