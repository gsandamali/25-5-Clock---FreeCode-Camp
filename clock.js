let breakIncrement = document.getElementById('break-increment');
let breakDecrement = document.getElementById('break-decrement');
let sessionIncrement = document.getElementById('session-increment');
let sessionDecrement = document.getElementById('session-decrement');
let startStop = document.getElementById('start_stop');
let reset = document.getElementById('reset');

let breakLength = document.getElementById('break-length');
let sessionLength = document.getElementById('session-length');
let timeLeft = document.getElementById('time-left');

let timer;
let timerStatus="begin"

startStop.addEventListener("click", () => {
    if (timerStatus ==="begin" || timerStatus === "stopped") {
        console.log("start the timer");
        timerStatus = "counting";
        timer = setInterval(() => {
            timeLeft.innerText = decrementTime(timeLeft.innerText);
        }, 1000);

    }else if (timerStatus === "counting"){
        console.log("stop the timer");
        timerStatus = "stopped";
        clearInterval(timer);
    }
})

reset.addEventListener("click", () => {
    console.log('reset button clicked');
    clearInterval(timer);
});

function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let secondDisplay = parseTnt(timeDisplay[1]);
    let minuteDisplay = parseTnt(timeDisplay[0]);

    secondDisplay -= 1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;
    }

    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay;
    }

    return minuteDisplay + ":" + secondDisplay;
    
}
