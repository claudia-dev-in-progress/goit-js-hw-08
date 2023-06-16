import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const throttleFunction = throttle(updateVideoPlayerCurrentTime, 1000);

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const duration = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(duration);

player.on("timeupdate", throttleFunction);

function updateVideoPlayerCurrentTime(data) {
  console.log(data);
  localStorage.setItem("videoplayer-current-time", data.seconds);
}
