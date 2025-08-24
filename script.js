const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');
const volumeSlider = document.querySelector('.volume');
const speedSlider = document.querySelector('.playbackSpeed');
const progressBar = document.querySelector('.progress__filled');

// Play/Pause
toggle.addEventListener('click', () => {
  if(video.paused) video.play();
  else video.pause();
});

// Update toggle icon
video.addEventListener('play', () => toggle.textContent = '❚ ❚');
video.addEventListener('pause', () => toggle.textContent = '►');

// Skip buttons
rewindBtn.addEventListener('click', () => video.currentTime += parseFloat(rewindBtn.dataset.skip));
forwardBtn.addEventListener('click', () => video.currentTime += parseFloat(forwardBtn.dataset.skip));

// Volume & Speed
volumeSlider.addEventListener('input', () => video.volume = volumeSlider.value);
speedSlider.addEventListener('input', () => video.playbackRate = speedSlider.value);

// Progress
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
});
