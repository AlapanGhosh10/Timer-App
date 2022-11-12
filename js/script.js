let clock = 601;
const start_button = document.getElementById("st_but");
const reset_button = document.getElementById("rst_but");
const stop_button = document.getElementById("s_but");
const view_time = document.getElementById("time");
stop_button.disabled = true;
reset_button.disabled = true;
start_button.addEventListener("click", start);
reset_button.addEventListener("click", reset);
stop_button.addEventListener("click", stop);
function start() {
  view_time.innerHTML = --clock + "</br><span>Seconds Left</span>";
  start_button.disabled = true;
  reset_button.disabled = false;
  stop_button.disabled = false;
  timer = setInterval(function () {
    if (clock === 0) {
      document.getElementById("alarm").play();
      view_time.innerHTML = "Time's Up</br><span>Tap Reset To End</span>";
    } else view_time.innerHTML = --clock + "</br><span>Seconds Left</span>";
  }, 1000);
}
function reset() {
  view_time.innerHTML = "Tap Start</br><span>To Start Again</span>";
  clock = 601;
  start_button.disabled = false;
  stop_button.disabled = true;
  clearInterval(timer);
}
function stop() {
  view_time.innerHTML = clock + "</br><span>Tap Start To Continue</span>";
  start_button.disabled = false;
  clearInterval(timer);
}
