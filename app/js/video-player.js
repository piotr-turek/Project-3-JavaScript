const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const videoPlayer = document.getElementById("videoPlayer");
const progressLineTop = document.getElementById("progressLineTop");
const muteButton = document.getElementById("muteButton");
const unMuteButton = document.getElementById("unMuteButton");

let progressResult = 0;
let timeProgress = document.getElementById("current-time");

const ChangePlayButtonToPauseButton = () => {
  playButton.classList.remove("play-container-visible-on");
  playButton.classList.add("play-container-visible-off");

  pauseButton.classList.remove("pause-container-visible-off");
  pauseButton.classList.add("pause-container-visible-on");

  doPlayVideo();
  function doPlayVideo() {
    videoPlayer.play();
  }
  GoWithProgressLine();
  //   TimeUpdateEvent();
};

const ChangePauseButtonToPlayButton = () => {
  playButton.classList.remove("play-container-visible-off");
  playButton.classList.add("play-container-visible-on");

  pauseButton.classList.remove("pause-container-visible-on");
  pauseButton.classList.add("pause-container-visible-off");

  doPauseVideo();
  function doPauseVideo() {
    videoPlayer.pause();
  }
  GoWithProgressLine();
  //   TimeUpdateEvent();
};

const progressInterval = setInterval(GoWithProgressLine, 500);
function GoWithProgressLine() {
  if (videoPlayer.readyState) {
    progressResult = (videoPlayer.currentTime * 560) / videoPlayer.duration;
    progressLineTop.style.width = progressResult + "px";
    console.log(progressResult);
  }
}

function doCurrentTimeMeasure() {
  let properCurrentTimeRes = "";
  let minutes = Math.floor(videoPlayer.currentTime / 60);
  let seconds = videoPlayer.currentTime - minutes * 60;
  seconds = seconds.toFixed(0);

  if (minutes < 10 && seconds < 10) {
    properCurrentTimeRes = "0" + minutes + ":" + "0" + seconds;
  } else if (minutes < 10 && seconds >= 10) {
    properCurrentTimeRes = "0" + minutes + ":" + seconds;
    if (seconds == 60) {
      seconds = 0;
      properCurrentTimeRes = "0" + minutes + ":" + "0" + seconds;
    }
  } else if (minutes >= 10 && seconds < 10) {
    properCurrentTimeRes = "" + minutes + ":" + "0" + seconds;
  } else if (minutes >= 10 && seconds >= 10) {
    properCurrentTimeRes = minutes + ":" + seconds;
    if (seconds == 60) {
      seconds = 0;
      properCurrentTimeRes = minutes + ":" + "0" + seconds;
    }
  }

  timeProgress.innerHTML = properCurrentTimeRes;
  if (videoPlayer.currentTime == videoPlayer.duration) {
    ChangePlayButtonToPauseButton();
  }
}

// ZASTĄPIONE  ontimeupdate="doCurrentTimeMeasure()" w tagu <video>

// function TimeUpdateEvent() {
//   videoPlayer.ontimeupdate = function () {
//     doCurrentTimeMeasure();
//   };
// }

// ZASTĄPIONE  ontimeupdate="doCurrentTimeMeasure()" w tagu <video>

function DisplayFilmDurationTime() {
  let durationRes = "";
  let minutes = Math.floor(videoPlayer.duration / 60);
  let seconds = videoPlayer.duration - minutes * 60;
  seconds = seconds.toFixed(0);

  if (minutes < 10 && seconds < 10) {
    durationRes = "0" + minutes + ":" + "0" + seconds;
  } else if (minutes < 10 && seconds >= 10) {
    durationRes = "0" + minutes + ":" + seconds;
    if (seconds == 60) {
      seconds = 0;
      durationRes = "0" + minutes + ":" + "0" + seconds;
    }
  } else if (minutes >= 10 && seconds < 10) {
    durationRes = "" + minutes + ":" + "0" + seconds;
  } else if (minutes >= 10 && seconds >= 10) {
    durationRes = minutes + ":" + seconds;
    if (seconds == 60) {
      seconds = 0;
      durationRes = minutes + ":" + "0" + seconds;
    }
  }
  document.getElementById("duration-time").innerHTML = durationRes;
}

function FilmDurationTimeFunc() {
  videoPlayer.ondurationchange = function () {
    DisplayFilmDurationTime();
  };
}

FilmDurationTimeFunc();

function doMute() {
  muteButton.classList.remove("mute-ico-visible-on");
  muteButton.classList.add("mute-ico-visible-off");

  unMuteButton.classList.remove("un-mute-ico-visible-off");
  unMuteButton.classList.add("un-mute-ico-visible-on");

  videoPlayer.muted = true;
}

function doUnMute() {
  muteButton.classList.remove("mute-ico-visible-off");
  muteButton.classList.add("mute-ico-visible-on");

  unMuteButton.classList.remove("un-mute-ico-visible-on");
  unMuteButton.classList.add("un-mute-ico-visible-off");

  videoPlayer.muted = false;
}

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  videoPlayer.addEventListener(
    "play",
    function () {
      ctx.drawImage(videoPlayer, 0, 0, 620, 400);
    },
    30
  );
};

function MakeFullScreen() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullScreen) {
    videoPlayer.webkitRequestFullScreen();
  } else if (videoPlayer.mozRequestFullScreen) {
    videoPlayer.mozRequestFullScreen();
  }
}
