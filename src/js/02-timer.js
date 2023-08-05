import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { padStart } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    startBtn: document.querySelector("button[data-start]"),
    dateInput: document.getElementById("datetime-picker"),
    displayDays:document.querySelector("span[data-days]"),
    displayHours:document.querySelector("span[data-hours]"),
    displayMins:document.querySelector("span[data-minutes]"),
    displaySeconds:document.querySelector("span[data-seconds]"),
};

let selectedDate

let dateChangeIntervalId

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(!selectedDates){
            return
        }
        if (selectedDates[0].getTime() > Date.now()) {
            refs.startBtn.disabled = false
            selectedDate = selectedDates[0].getTime()
        }else{
        refs.startBtn.disabled = true
        // alert("Please choose a date in the future")
        Notify.failure(
            "Please choose a date in the future"
        )
        
    }
    
},
};

flatpickr('#datetime-picker', options);


refs.startBtn.addEventListener("click", (event) =>{
    event.currentTarget.disabled = true
    refs.dateInput.disabled = true

    changeDate(selectedDate)
    dateChangeIntervalId = setInterval(changeDate, 1000, selectedDate)
})

function changeDate(futureDate){
    const currentDate = Date.now()
    const dateDifference = (futureDate - currentDate)
    if(dateDifference <= 0){

        console.log(dateDifference)
        clearInterval(dateChangeIntervalId)
        return
    }
    const {seconds, minutes, hours, days} = convertMs(dateDifference)
    refs.displayDays.textContent = addLeadingZero(days)

    refs.displayHours.textContent = addLeadingZero(hours)

    refs.displayMins.textContent = addLeadingZero(minutes)

    refs.displaySeconds.textContent = addLeadingZero(seconds)
    
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
    return value.toString().padStart(2,"0")
}

