function updateClock(){

    let now = new Date();

    let hours = now.getHours(); // 24 hour time
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    let displayhours = hours % 12;
    displayhours = displayhours ? displayhours : 12;

    displayhours = String(displayhours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    let time = displayhours + ":" + minutes + ":" + seconds + " " + ampm;

    document.getElementById("clock").innerText = time;

    // Greeting logic uses ORIGINAL hours
    if(hours < 12){
        document.getElementById("greeting").innerText = "Good Morning";
    }
    else if(hours < 18){
        document.getElementById("greeting").innerText = "Good Afternoon";
    }
    else{
        document.getElementById("greeting").innerText = "Good Evening";
    }
    let day =now.getDay();
    let date =now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    document.getElementById("date").innerText=days[day]+", "+date+" "+months[month]+" "+year;
}

setInterval(updateClock,1000);