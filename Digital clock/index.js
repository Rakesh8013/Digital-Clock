const hourEL = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.second');


function updateClock() {
const currentDate = new Date()
setTimeout(updateClock, 1000);

const hour = currentDate.getHours();
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();


const hourDailer = (hour / 12) * 360;
hourEL.style.transform = `rotate(${hourDailer}deg)`
// console.log(hourDailer)

const minDailer = (min / 60) * 360;
minEl.style.transform = `rotate(${minDailer}deg)`

const secDailer = (sec / 60) * 360;
secEl.style.transform = `rotate(${secDailer}deg)`
}

updateClock();