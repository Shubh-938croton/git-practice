function updateClock(){
    let now= new Date();

    let hours = now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let milliseconds=now.getMilliseconds();
    let time =hours+":"+minutes+":"+seconds+":"+milliseconds;
    document.getElementById("clock").innerText=time;
}
setInterval(updateClock,1000);