let timeStarted = null;
let interval = null;

let timeLabel = document.getElementById("time");
timeLabel.innerText = getTimeString(0);

let totalPreviousTimeRunSeconds = 0;
let running = false;

var startTimer = () => {
  if (!running) {
    timeStarted = Date.now();
    running = true;
    interval = setInterval(updateTimeFunction, 1000);
  }
}

var stopTimer = () => {
  if (running) {
    let timePaused = Date.now();
    totalPreviousTimeRunSeconds += Math.floor(
      (timePaused - timeStarted) / 1000
    );
    clearInterval(interval);
    timeStarted = null;
    running = false;
  }
}

var resetTimer = () => {
  return new Promise((resolve) => {
    running = false;
    clearInterval(interval);
    totalPreviousTimeRunSeconds = 0;
    timeStarted = null;
    timeLabel.innerText = getTimeString(0);
    resolve();
  });
}

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {

  resetClickPromise()
    .then(() => {
      alert("Resetting the timer");
    })
    .catch((error) => {
      alert("Something went wrong please try again");
    });

});

async function updateTimeFunction() {

  let difftime = Date.now() - timeStarted + totalPreviousTimeRunSeconds * 1000;
  timeLabel.innerText = await getTimeString(difftime);

}

function getTimeString(diff) {

  diff /= 1000;
  diff = Math.floor(diff);
  let hour = Math.floor(diff / 3600);
  diff -= hour * 3600;
  let minute = Math.floor(diff / 60);
  diff -= minute * 60;
  let second = diff;
  return `${formatString(hour)}:${formatString(minute)}:${formatString(
    second
  )}`;

}

function formatString(num) {

  let str1 = String(num);
  
  if (str1.length == 1) {
    return `0${str1}`;
  }
  
  return str1;
}
