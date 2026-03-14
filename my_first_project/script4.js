function updateClock(){

let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let totalSeconds = hours*3600 + minutes*60 + seconds;

let percent = Math.floor((totalSeconds/86400)*100);

let ampm = hours>=12 ? "PM":"AM";

let displayhours = hours%12;

displayhours = displayhours? displayhours:12;

displayhours = String(displayhours).padStart(2,"0");
minutes = String(minutes).padStart(2,"0");
seconds = String(seconds).padStart(2,"0");

let colon = seconds%2===0?":":" ";

let time = displayhours+colon+minutes+colon+seconds+" "+ampm;

document.getElementById("clock").innerText=time;

if(hours<12){
document.getElementById("greeting").innerText="Good Morning";
}
else if(hours<18){
document.getElementById("greeting").innerText="Good Afternoon";
}
else{
document.getElementById("greeting").innerText="Good Evening";
}

let day = now.getDay();
let date = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

document.getElementById("date").innerText=
days[day]+", "+date+" "+months[month]+" "+year;

document.getElementById("progress").innerText=
"Day Progress: "+percent+"%";

let start = new Date(year,0,1);

let diffWeek = now-start;

let week = Math.ceil((diffWeek/86400000 + start.getDay()+1)/7);

document.getElementById("week").innerText="Week: "+week;

let dayPercent = (totalSeconds/86400)*100;
document.getElementById("dayBar").style.width = dayPercent+"%";

let dayOfMonth = now.getDate();
let daysInMonth = new Date(year,month+1,0).getDate();

let monthPercent = (dayOfMonth/daysInMonth)*100;

document.getElementById("monthBar").style.width = monthPercent+"%";

let startYear = new Date(year,0,0);
let diffYear = now-startYear;

let dayOfYear = Math.floor(diffYear/86400000);

let yearPercent = (dayOfYear/365)*100;

document.getElementById("yearBar").style.width = yearPercent+"%";

let body = document.body;

if(hours>=6 && hours<12){
body.style.backgroundImage="url('morning.jpg')";
}
else if(hours>=12 && hours<17){
body.style.backgroundImage="url('afternoon.jpg')";
}
else if(hours>=17 && hours<20){
body.style.backgroundImage="url('evening.jpg')";
}
else{
body.style.backgroundImage="url('night.jpg')";
}

}

function showZone(){

let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.getElementById("zone").innerText=zone;

}

function toggleTheme(){

document.body.classList.toggle("dark-mode");

}

let quotes=[

"Discipline beats motivation.",
"Small progress every day adds up.",
"Focus on systems not goals.",
"Consistency builds mastery.",
"Hard things create strong people.",
"Your future is built today.",
"Effort compounds like interest.",
"Stay curious. Keep learning.",
"Action removes doubt.",
"Build habits not excuses."

];

function showQuote(){

let now = new Date();

let start = new Date(now.getFullYear(),0,0);

let diff = now-start;

let dayOfYear = Math.floor(diff/86400000);

let index = dayOfYear % quotes.length;

document.getElementById("quote").innerText=
"Quote of the Day: "+quotes[index];

}

updateClock();
showZone();
showQuote();

setInterval(updateClock,1000);