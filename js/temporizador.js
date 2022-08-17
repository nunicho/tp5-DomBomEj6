// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Select option buttons
const startAction = document.getElementById("start-timer");
const stopAction = document.getElementById("stop-timer");
const resetAction = document.getElementById("reset-timer");


inputTiempo = parseInt(prompt("Ingresar minutos"))
if(isNaN(inputTiempo) == true || inputTiempo < 0 || inputTiempo > 61){
  alert("Lo ingresado no es válido")
}
  



// Default inital value of timer
let defaultValue = inputTiempo * 60;

// variable to the time
let countDownTime = defaultValue;

// variable to store time interval
let timerID;

// Variable to track whether timer is running or not
let isStopped = true;

// Function calculate time string
const findTimeString = () => {
  var minutes = String(Math.trunc(countDownTime / 60));
  var seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = 1;
  renderTime();
};

// Attach onclick event to buttons
startAction.onclick = startTimer;
resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1;
  //Display updated time
  renderTime();
  

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    // Play alarm on timeout
     countDownTime = defaultValue;
  }
};



/*
SEguí el siguiente tutorial:

https://contactmentor.com/build-30-minutes-countdown-timer-js-sound/


*/
