///////////////////////// GAME LOOOOOP 
let startT=0
let timeHandler=null

function gameloop(){
let date=new Date();
let newDate=date.getTime();
document.getElementById('secDiv').innerHTML=newDate - startT;
}

function StartClick(){
let date=new Date();
startT=date.getTime();
timeHandler=setInterval(gameloop,20);
}
function StopClick(){
let date=new Date();
startT=null
clearInterval(timeHandler);
}
document.getElementById('startBtn') .addEventListener("click",StartClick);
document.getElementById('stopBtn') .addEventListener("click",StopClick);