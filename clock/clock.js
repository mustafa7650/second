
let startTime = 0;
let timerHandler = null;


//---game loop

function gameLoop(){
    let date = new Date();
    nowTime = date.getTime();
document.getElementById('hrDiv').innerHTML  = nowTime - startTime;

}

//---start click
function startClick(){
    let date = new Date();
    startTime = date.getTime();
    timerHandler = setInterval(gameLoop, 20);
        // document.setInterval( gameLoop, 20);
}
function stopClick(){
    let date = new Date();
    startTime = null;
    clearInterval(timerHandler);
}

//----start event handler

document.getElementById("startBtn").addEventListener("click", startClick);
document.getElementById("stopBtn").addEventListener("click", stopClick);

