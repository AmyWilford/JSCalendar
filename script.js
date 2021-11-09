// establishes date
const date = new Date();

let todayDate = document.querySelector('#todayDate');

const renderCalendar = () => {
    //sets date to first of month to find appropriate week index
    date.setDate(1);
    // establish const monthDays that is the .days div in HTML file
const monthDays = document.querySelector('.days')
// Set up last day variable to find last day of each month. Get full Year, get Month, day is 0 = which gives us last day of previous month. To get last day of CURRENT month, add +1 to get Month Function. Adding getDate() method at end gives us just the day of the month (Rather than whole date). Now we can add lastDay into for loop

const lastDay = new Date(date.getFullYear(),
date.getMonth()+1,0).getDate();

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),
date.getMonth()+1,0).getDay();

// Sets the amount of next days from 7 minus the index of the last day of the month, -1(the day)
const nextDays = 7 - lastDayIndex -1;

// STEP 1: Create an array of months
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December' 
];
// STEP 2. Update HTML h1 to read month from JS. Use getMonth on date to pull the month from the current date. Pulling the index number from the months array gives us the current month
document.querySelector('.date h1').innerHTML = `${months[date.getMonth()]}, ${date.getFullYear()}`
// Step 3. use toDateString which lists the date (From date const ) as a sting
document.querySelector('.date p').innerHTML = new Date().toDateString();
// STEP 4. display days of the month using a for loop
// innerHTML of establish monthDays = days (for loop running from 1 - 31)

let days = '';
// this is setting up previous days of month, 
for(let x = firstDayIndex; x > 0; x--) {
    days+= `<div class='prev-date'>${prevLastDay-x+1}</div>`
};

// for loop for days of month
for(let i = 1; i<=lastDay; i++) {
    // if statement highlights today which applies css styling
    if (i=== new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days+=`<div class='today'>${i}</div>`;
        //else just list number of day
    }else {
        days+=`<div>${i}</div>`;
    }
}

// for loop for upcoming days. J begins with 1 because each month begins with 1
for(let j=1; j <=nextDays;j++) {
    days+=`<div class="next-date">${j}</div>`
}
monthDays.innerHTML = days;

}


// top toggle between months

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    todayDate.className = "displayNone";
    renderCalendar();

})

document.querySelector('.next').addEventListener('click', () => {
     date.setMonth(date.getMonth()+1);
     todayDate.className = "displayNone";
    renderCalendar();
})

renderCalendar();

