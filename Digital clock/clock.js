const hour = document.getElementById("hours");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");


const clock = setInterval(function time(){
    let dateToday= new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hrs < 10){
        hrs = '0' + hrs;
    }

    if (min < 10){
        min = '0' + min;
    }

    if (sec < 10){
        sec = '0' + sec;
    }

    hour.textContent = hrs;
    minute.textContent = min;
    second.textContent = sec;

    const days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    const dayOfWeek = days[dateToday.getDay()];
    const month = months[dateToday.getMonth()];
    const year = dateToday.getFullYear();
    const dayOfMonth = dateToday.getDate();


    dateElement.textContent = `${dayOfMonth} ${month} ${year}`;
    dayElement.textContent = dayOfWeek;


}, 1000);