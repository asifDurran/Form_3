const video = document.getElementById("video");
const paly = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play & Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.paly();
  } else {
    video.pause();
  }
}
// Update Play/Pause Icon
function updatePlayIcon() {
  if (video.paused) {
    paly.innerHTML = "<i class='fa fa-play fa-2x'></i>";
  } else {
    paly.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
  }
}
//update progress & timestamp
function updateProgress() {
  return true;
}
// set video time to progress
function setVideoProgress() {
  return true;
}
//Stop Video
function stopVideo() {
  return true;
}

// add event listener
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

paly.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
