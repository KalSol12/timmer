const diplay=document.querySelector('#timer');
 const startBtn=document.getElementById('startBtn');
let second=0;
let minute=0;
let hour=0;
let leadingsecond;
let leadingminute;
let leadinghoure;
let timerStatus="stoped"
let timerInteval=0;
function interval(params) {
    
if (second<60) {
    second++
    if (second/60==1) {
         minute++
         second=0;
         if (minute/60==1) {
            hour++
            minute=0;
         }
    }
    if (second<10) {
        leadingsecond="0"+second.toString();   
    }else{
        leadingsecond=second
    }
    if (minute<10) {
        leadingminute="0"+minute.toString();   
    }else{
        leadingminute=minute
    }
    if (hour<10) {
        leadinghoure="0"+hour.toString();   
    }else{
        leadinghoure=hour
    }
}
 diplay.innerText=leadinghoure+":"+leadingminute+":"+leadingsecond;
}
startBtn.addEventListener('click',function (params) {
    if (timerStatus==="stoped") {
        timerInteval=window.setInterval(interval,100);
        startBtn.innerHTML='<button id="pause">pause</button>';
         startBtn.removeAttribute('id','timer')
        timerStatus='started'
    }
    else{
       window.clearInterval(timerInteval)
        startBtn.innerHTML='<button id="startBtn">start</button>';
          startBtn.removeAttribute('id','pause') 
         timerStatus='stoped'

    }
})
resetBtn=document.getElementById('resetBtn')
resetBtn.addEventListener('click',()=>{
    window.clearInterval(timerInteval)
     diplay.innerText='00:00:00'
     second=0;
     minute=0;
     hour=0
     startBtn.innerHTML='<button id="startBtn">start</button>';
     startBtn.removeAttribute('id','pause') 
})
