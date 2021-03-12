var status = 'night';
var i = true;
var barStatus = 0;
var prevTime = 0;

function hideStars(){
    document.getElementById('background').classList.add("hidden");
}

function showStars(){
    document.getElementById('background').classList.remove("hidden");
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
    var session = "AM";

    if(prevTime !== h){

        if(session == "AM")
        {
            barStatus = (100/24*h);
        }
        else{
            barStatus = (100/24*h+50);
        }
        prevTime = h;
        updateProgress = true;
        move(barStatus,updateProgress);
    }
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;

    if(session == "PM" && h >= 10 && status =="day"){ //dag naar nacht.
        showStars();
        status = "night";
    }

    if(session == "AM" && h >= 8 && status =="night"){ //nacht naar dag.
        hideStars();
        status ="day";
    }
}

setInterval(showTime, 1000);