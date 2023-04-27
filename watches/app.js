// var clockelement = document.getElementById("clock");

// setInterval (function(){

//     var now = moment();
//     var formatedtime = now.format("hh:mm:ss A");

//     clockelement.textContent = formatedtime;

// },1000);
var hour ;
var min ;
var sec ;
var settimer = document.getElementById("timer");
var input = document.getElementById("timer").textContent;
var playbtn =  document.getElementById("play_c"); 
var pausebtn =  document.getElementById("pause_c"); 
var mutebtn = document.getElementById("mutebtn");
mutebtn.classList.add("hide");
pausebtn.classList.add("hide");


var timer;

// create an audio object and load the beep.mp3 file
var audio = new Audio("beep.mp3");

function updatetimer() {
  if ( sec < 0){
    sec = 59;
    min--;
    if ( min < 0){
      min = 59;
      hour--;
    }
  }if (hour == 0 && min == 0 && sec == 0){
    clearInterval(timer);
    console.log("time over");
    pausebtn.classList.add("hide");
    playbtn.classList.remove("hide");
    mutebtn.classList.remove("hide");
    audio.loop = true;
    audio.play("beep.mp3");
    document.getElementById("mutebtn").addEventListener("click", function(){
      audio.loop = false;
    audio.pause("beep.mp3");
    mutebtn.classList.add("hide");
    })

  
  }
  var formattedHour = hour.toString().padStart(2,"0");
  var formattedMin = min.toString().padStart(2,"0");
  var formattedSec = sec.toString().padStart(2,"0");
  settimer.innerText = formattedHour + ":" + formattedMin + ":" + formattedSec;
  sec--
}








function start(){
  timer = setInterval(updatetimer,1000);
  input = settimer.textContent;
  [hour ,  min , sec] = input.split(":");
  playbtn.classList.add("hide");
  pausebtn.classList.remove("hide");
  if (hour == 0 && min == 0 && sec ==0){
    hour = 0;
    min = 5;
    sec  = 0;
  }



  audio.loop = false;
  audio.pause("beep.mp3");
  mutebtn.classList.add("hide");


}

function resettimer() {
  clearInterval(timer);
  hour = 0;
  min = 5;
  sec = 00;
   formattedHour = hour.toString().padStart(2,"0");
   formattedMin = min.toString().padStart(2,"0");
 formattedSec = sec.toString().padStart(2,"0");
  settimer.innerText = formattedHour + ":" + formattedMin + ":" + formattedSec;
  pausebtn.classList.add("hide");
  playbtn.classList.remove("hide");

  audio.loop = false;
  audio.pause("beep.mp3");
  mutebtn.classList.add("hide");
  
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
  playbtn_s.classList.remove("hide");
  pausebtn_s.classList.add("hide");

}
function pause_s(){
  clearInterval(intervalid);
  playbtn_s.classList.remove("hide");
  pausebtn_s.classList.add("hide");
}



// var settimer = document.getElementById("timer").textContent;
// console.log(settimer.split(':'));