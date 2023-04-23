// var clockelement = document.getElementById("clock");

// setInterval (function(){

//     var now = moment();
//     var formatedtime = now.format("hh:mm:ss A");

//     clockelement.textContent = formatedtime;

// },1000);
var hour = 13;
var min = 03;
var sec = 04;
var settimer = document.getElementById("timer");
var playbtn =  document.getElementById("play_c"); 
var pausebtn =  document.getElementById("pause_c"); 
pausebtn.classList.add("hide");


var timer;

function updatetimer() {
  console.log (hour + ":" + min + ":" + sec);
  settimer.innerText = (hour +"h" + ":" + min +"m" + ":" + sec+"s");
  
  if (sec < 1) {
    sec = 59;
    min--;
  }
  if (min < 1) {
    min = 59;
    hour--;
  }
  if (hour == 0 && min == 0 && sec == 0) {
    clearInterval(timer);
    
   
    console.log("00:00:00");
    console.log("timer over!");
  } else if (min >= 0 && sec >= 0) {
     var formattedHour = hour.toString().padStart(2, '0');
  var formattedMin = min.toString().padStart(2, '0');
  var formattedSec = sec.toString().padStart(2, '0');
  settimer.innerText = formattedHour + ":" + formattedMin + ":" + formattedSec;
    sec--;
    playbtn.classList.add("hide");
    pausebtn.classList.remove("hide");
  }
}

function start() {
 var inputtime  = document.getElementById("timer").textContent;
 var [hour_i, min_i,sec_i] = inputtime.split(":");
 hour = parseInt(hour_i,10);
 min = parseInt(min_i,10);
 sec = parseInt(sec_i,10);

    timer = setInterval(updatetimer, 1000);
  play.classList.add("hide");
}

function resettimer() {
  clearInterval(timer);
  hour = 0;
  min = 5;
  sec = 00;
  var formattedHour = hour.toString().padStart(2,"0");
  var formattedMin = min.toString().padStart(2,"0");
  var formattedSec = sec.toString().padStart(2,"0");
  settimer.innerText = formattedHour + ":" + formattedMin + ":" + formattedSec;
  play.classList.remove("hide");
  
}

function  pause(){
  
    clearInterval(timer);
  
    pausebtn.classList.add("hide");
    playbtn.classList.remove("hide");
}



// stop watch

var stopwtach = document.getElementById("S_timer");
var mili = document.getElementById("mili");
var playbtn_s = document.getElementById("play_s");
var pausebtn_s = document.getElementById("pause_s");
pausebtn_s.classList.add("hide");

var hour_s = 0;
var min_s = 0;
var sec_s = 0;
var mili_s = 0;
var intervalid;

function update_s(){
  if (mili_s > 99){
    mili_s = 0;
    sec_s++
    
  } if (sec_s > 59){
    sec_s = 0;
    min_s++
  } if (min_s >  59 ){
    min_s = 0;
    hour_s++
  }
  var formattedHour_s = hour_s.toString().padStart(2,"0");
  var formattedmin_s = min_s.toString().padStart(2,"0");
  var formattedsec_s = sec_s.toString().padStart(2,"0");
  var formattedmili_s = mili_s.toString().padStart(2,"0");
  stopwtach.innerText = formattedHour_s + ":" + formattedmin_s + ":" + formattedsec_s;
  mili.innerText =  formattedmili_s;
  playbtn_s.classList.add("hide");
  pausebtn_s.classList.remove("hide");
  mili_s++
}

function start_s(){
  intervalid = setInterval(update_s,10);
}
function reset_s(){
  clearInterval(intervalid);
  hour_s = 0;
  min_s = 0;
  sec_s = 0;
  mili_s = 0;

   formattedHour_s = hour_s.toString().padStart(2,"0");
   formattedmin_s = min_s.toString().padStart(2,"0");
   formattedsec_s = sec_s.toString().padStart(2,"0");
   formattedmili_s = mili_s.toString().padStart(2,"0");
  stopwtach.innerText = formattedHour_s + ":" + formattedmin_s + ":" + formattedsec_s;
  mili.innerText =  formattedmili_s;

}
function pause_s(){
  clearInterval(intervalid);
  playbtn_s.classList.remove("hide");
  pausebtn_s.classList.add("hide");
}



// var settimer = document.getElementById("timer").textContent;
// console.log(settimer.split(':'));