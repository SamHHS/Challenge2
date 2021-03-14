var status = 'night';
var i = true;
var prevTime = 0;
var barStatus = 0;
var selector = document.getElementsByClassName('scheduleItem');

function hideStars(){
    document.getElementById('background').classList.add("hidden");
}

function showStars(){
    document.getElementById('background').classList.remove("hidden");
}

function setScheduleActive(number){
    var scheduleNumber = number;

    scheduleItem = selector[scheduleNumber];
    scheduleItem.classList.add("aktief");
}

function setScheduleInactive(number){
    var scheduleNumber = number;

    scheduleItem = selector[scheduleNumber];
    scheduleItem.classList.remove("aktief");
}

function move(percentage, yayOrNay) {
    i = yayOrNay;
   var barProgress = Math.round(percentage);
  if (i == true) {
    i = false;
    var elem = document.getElementById("progress");
    frame();
    function frame() {
      if (barProgress >= 100) {
        i = true;
      } else {
        elem.style.width = barProgress + "%";
        elem.innerHTML = barProgress  + "%";
      }
    }
  }
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    if(prevTime !== h){
        barStatus = (100/24*h);
        prevTime = h;
        updateProgress = true;
        move(barStatus,updateProgress);
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("clock").innerText = time;

    if(h >= 20 &&  h < 8 && status =="day"){ //dag naar nacht.
        showStars();
        status = "night";
    }

     if(h >= 8 && h<20 && status =="night"){ //nacht naar dag.
        hideStars();
        status ="day";
    }

    switch(h){
        case 9:
        setScheduleActive(0);
        setScheduleInactive(4);
        break;
         case 10:
        setScheduleActive(1);
        setScheduleInactive(0);
        break;
         case 12:
        setScheduleActive(2);
        setScheduleInactive(1);
        break;
         case 15:
        setScheduleActive(3);
        setScheduleInactive(2);
        break;
         case 18:
        setScheduleActive(4);
        setScheduleInactive(3);
        break;
        default:
        for(var i = 0; i<selector.length-1;i++){
            setScheduleInactive(i);
        }
    }

}

setInterval(showTime, 1000);