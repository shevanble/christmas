// ending date
const newYears = "1 Jan 2023";

// current date
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    // we divide by 1000 because the date is in militotalseconds
    // 1000 militotalseconds = 1totalseconds

    //totalseconds left till new year
    const totalseconds = (newYearsDate - currentDate) / 1000;

    // We devide totalseconds by 60 to get to minutes
    // Then we devide minutes by 60 to get to hours
    // Least but no last we devide by 24 to get to hours

    /* The Math.floor() function always rounds down and 
    returns the largest integer less than or equal to a 
    given number.*/
    const days = Math.floor(totalseconds / 60 / 60 / 24);

    /*  It divides the given numerator by the denominator
     to find a result. In simpler words, it produces a 
     remainder for the integer division. 
     Thus, the remainder is also always an integer 
     number only. */

    const hours = Math.floor(totalseconds/ 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 24;
    const seconds = Math.floor(totalseconds) % 60;

    let daysEl = document.getElementById("days");
    let hourEl = document.getElementById("hours");
    let minsEl = document.getElementById("mins");
    let secEl = document.getElementById("seconds");  
    
    daysEl.innerText = days;
    hourEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(minutes);
    secEl.innerText = formatTime(seconds);

    

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

// call function every 1000 miloseconds 1 seconds
setInterval(countdown,1000);