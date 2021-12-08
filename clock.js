let breakIncrement = document.getElementById('break-increment');
let breakDecrement = document.getElementById('break-decrement');
let sessionIncrement = document.getElementById('session-increment');
let sessionDecrement = document.getElementById('session-decrement');
let startStop = document.getElementById('start_stop');
let reset = document.getElementById('reset');

let breakLength = document.getElementById('break-length');
let sessionLength = document.getElementById('session-length');
let timeLeft = document.getElementById('time-left');

let sound = document.getElementById('beep');

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
    breakLength.innerHTML=5;
    sessionLength.innerHTML=25;
    timeLeft.innerHTML=25+":"+"00";

});

function decrementTime(timeString) {
    let timeDisplay = timeString.split(":");
    let secondDisplay = parseInt(timeDisplay[1]);
    let minuteDisplay = parseInt(timeDisplay[0]);

    secondDisplay -= 1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;

        
        if (minuteDisplay <= -1) {
            console.log(minuteDisplay)
            if (document.getElementById('timer-label').innerText === "Session"){
                document.getElementById('timer-label').innerText = "Break";
                minuteDisplay = breakLength.innerHTML-1;
            }else{
                document.getElementById('timer-label').innerText = "Session";
                minuteDisplay = sessionLength.innerHTML-1;
            }
        }

        if (minuteDisplay === 0) {
            timeLeft.style.color = "#FF0000";
            document.getElementById('timer-label').style.color = "#FF0000";
            sound.play();
        } else {
            timeLeft.style.color = "#000000";
            document.getElementById('timer-label').style.color = "#000000";
        }      
    }

    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay;
    }

    return minuteDisplay + ":" + secondDisplay;
    
};



let timeDisplay = timeLeft.innerText.split(":");
var count = parseInt(timeDisplay[0]);
sessionIncrement.onclick = function() {
    if (count === 59){
        count = 0;
    } else{
        count += 1;
    }
  sessionLength.innerHTML = count;
  let minuteDisplay = parseInt(timeDisplay[0]);
  minuteDisplay =count;

  let IntMin = minuteDisplay.toString();
  
  timeLeft.innerHTML = IntMin + ":" + timeDisplay[1]
  
  return [sessionLength, timeLeft];
};


sessionDecrement.onclick = function() {
    if (count === 0){
        count = 59;
    } else{
        count -= 1;
    }
  sessionLength.innerHTML = count;
  let minuteDisplay = parseInt(timeDisplay[0]);
  minuteDisplay =count;

  let IntMin = minuteDisplay.toString();
  timeLeft.innerHTML = IntMin + ":" + timeDisplay[1]
  return [sessionLength, timeLeft];
};


var count_1= breakLength.innerHTML 
breakIncrement.onclick = function() {
    if (count_1 === 59){
        count_1 = 0;
    } else{
        count_1 += 1;
    }
    breakLength.innerHTML = count_1; 
  return [breakLength];
};


breakDecrement .onclick = function() {
    if (count_1 === 0){
        count_1 = 59;
    } else{
        count_1 -= 1;
    }
    breakLength.innerHTML = count_1;
  return [breakLength];
};

var state = 'stop';
function buttonPlayPress() {
    if(state=='stop'){
      state='play';
      var button = d3.select("#start_stop").classed('btn-success', true); 
      button.select("i").attr('class', "fa fa-pause");  
    }
    else if(state=='play' || state=='resume'){
      state = 'pause';
      d3.select("#start_stop i").attr('class', "fa fa-play"); 
    }
    else if(state=='pause'){
      state = 'resume';
      d3.select("#start_stop i").attr('class', "fa fa-pause");        
    }
    console.log("button play pressed, play was "+state);
}
