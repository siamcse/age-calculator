const monthElement = document.getElementById('month');
const dateElement = document.getElementById('date');
const yearElement = document.getElementById('year');
const showAge = document.getElementById('show-age');

document.getElementById('calculate-btn').addEventListener('click',function(){
    const month = monthElement.value;
    const date = dateElement.options[dateElement.selectedIndex].text;
    const year = yearElement.value;
    
    calculate(month, date, year);
})

const calculate = (month, date, year) =>{
    const today = new Date();
    let birtYear = new Date(1995, 11, 30);

    birtYear.setFullYear(year);
    birtYear.setMonth(month);
    birtYear.setDate(date);

    const msPerDay = 24 * 60 * 60 * 1000;
    let days = (today.getTime() - birtYear.getTime()) / msPerDay;
    let years = Math.floor(days/365);
    let months = Math.floor((days % 365)/30);
    days = Math.round(days);
    days = (days % 365) % 30; 
    displayAge(months, days, years);
}
const displayAge = (months, days, years) =>{
    showAge.innerHTML = `
        <h2 class="text-xl text-success">Your age is: ${years} years ${months} months ${days} days</h2>
    `;
}