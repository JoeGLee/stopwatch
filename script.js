const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const timerDisplay = document.querySelector('.currentTime');
let milSec = 0;
let sec = 0;
let min = 0;
let hour = 0; 
let x = 1;
let start = false;// if start === false stopwatch is stopped if start === true stopwatch is started
startBtn.addEventListener('click',() => {start = true});
stopBtn.addEventListener('click', () => {start = false});
resetBtn.addEventListener('click', () => {
    milSec = 0;
    sec = 0;
    min = 0;
    hour = 0; 
    timerDisplay.textContent = hour + ':' + min + ':' + sec + '.' + milSec;
});

setInterval(stopwatch,10)

 function stopwatch(){
    if(start === true){
    milSec++;
    }   

    if(milSec === 100)
    {
        sec++;
        milSec = 0;
    }
    if(sec === 60)
    {
        min++;
        sec = 0;
    }
    if(min === 60)
    {
        hour++;
        min = 0;
    }
    timerDisplay.textContent = hour + ':' + min + ':' + sec + '.' + milSec;
 }