
let startTime = 0;
let working = false;
/////////////////////////////////////

const start_btn = document.getElementById("start");
start_btn.addEventListener("click", function(e) {
working = true;
let currentTime = new Date();
startTime = Math.floor(currentTime.getTime() / 1000);

});


const stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click", function(e) {
working = false;
startTime =0;
} );

const reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", function(e) {
working = false;
 document.getElementById("sec").innerHTML = 0;
 document.getElementById("min").innerHTML = 0;
 document.getElementById("hr").innerHTML = 0;
 
} );

//--game loop
const ticker  = window.setInterval(function() {

if (working == true) {
    let d = new Date();
    let curTime = Math.floor(d.getTime() / 1000);
    const newTime = curTime - startTime;
    const sec = document.getElementById("sec");
    const min = document.getElementById("min");
    const hr = document.getElementById("hr");
    
    sec.innerHTML = newTime;
    const minute = Math.floor(newTime/60)
    min.innerHTML = minute  ;
    hr.innerHTML = minute/60  ;
}else {

hr.innerHTML = 0;
}

},20);