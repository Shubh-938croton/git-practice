let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").innerText = h + ":" + m + ":" + s;
}

function startTimer(){

    if(timer !== null){
        return;
    }

    timer = setInterval(() => {

        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }

        if(minutes == 60){
            minutes = 0;
            hours++;
        }

        updateDisplay();

    },1000);
}

function stopTimer(){
    clearInterval(timer);
    timer = null;
}

function resetTimer(){
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function addLap(){

    let lapTime = document.getElementById("timer").innerText;

    let li = document.createElement("li");

    li.innerText = "Lap: " + lapTime;

    document.getElementById("laps").appendChild(li);
}

document.getElementById("start").onclick = startTimer;
document.getElementById("stop").onclick = stopTimer;
document.getElementById("reset").onclick = resetTimer;
document.getElementById("lap").onclick = addLap;