var status = 'night';

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
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
    document.getElementById("clock").textContent = time;

    if(session == "PM" && h >= 11 && status =="day"){ //dag naar nacht.
        showStars();
        status = "night";
    }

    if(session == "AM" && h >= 8 && status =="night"){ //nacht naar dag.
        hideStars();
        status ="day";
    }
}


setInterval(showTime, 1000);


function hideStars(){

    document.getElementById('background').classList.add("hidden");


}

function showStars(){
    document.getElementById('background').classList.remove("hidden");
}