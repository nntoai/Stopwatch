var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;
var stopTime = true;

function startTimer() {
  if (stopTime == true) {
    stopTime = false;
    timeCycle();
  }
}
function stopTimer() {
  if (stopTime == false) {
    stopTime = true;
  }
}
function timeCycle() {
  if (stopTime == false) {
    hour = parseInt(hour);
    minute = parseInt(minute);
    second = parseInt(second);
    millisecond = parseInt(millisecond);
    millisecond += 1;
    if (millisecond == 100) {
      second += 1;
      millisecond = 0;
    }
    if (second == 60) {
      minute += 1;
      second = 0;
      millisecond = 0;
    }
    if (minute == 60) {
      hour += 1;
      minute = 0;
      second = 0;
      millisecond = 0;
    }
    if(millisecond<10){
      millisecond="0"+millisecond;
    }
    if(second<10){
      second="0"+second;
    }
    if(minute<10){
      minute="0"+minute;
    }
    if(hour<10){
      hour="0"+hour;
    }

    document.getElementById("stopwatch").innerHTML =
    hour + ":" + minute + ":" + second + ":" + millisecond;
    var t = setTimeout(function () {
      timeCycle();
    }, 10);
  }
}
function resetTimer() {
  document.getElementById("stopwatch").innerHTML = "00:00:00:00";
  stopTime = true;
  hour=0;
  minute=0;
  second = 0;
  millisecond=0;
}
