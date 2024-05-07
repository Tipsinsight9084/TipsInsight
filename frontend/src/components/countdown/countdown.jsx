import React, {useEffect, useState} from 'react'
// console.log("props:: ", props);
// console.log("date::: ", props.date);
// console.log("time::: ", props.time);

const countdown = (props) => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    // const CorrectDate = props.date;
    // const CorrectTime = props.time;
    
    // const Newdeadline = "May, 10, 2023, 19:30";
    // deadline:

    const oldCorrectDate = props.date;
    // const CorrectDate = props.date;

// Convert to milliseconds, subtract 5 hours and 30 minutes, then create a new Date object
const CorrectDate = new Date(new Date(oldCorrectDate).getTime() - (11 * 60 * 60 * 1000));

// console.log("new corrct date: ", correctedDate);
const CorrectTime = props.time;
// console.log("CorrectDate: ", CorrectDate);
// console.log("CorrectTime: ", CorrectTime);

// Parse CorrectDate into a Date object
const dateObj = new Date(CorrectDate);
// console.log("dateobj", dateObj);
// console.log("new dateobj", dateObj.toISOString());

// Extract year, month, and day from CorrectDate
const year = dateObj.getFullYear();
const month = dateObj.getMonth();
const day = dateObj.getDate();

// console.log("day: ", day);
// console.log("day: ", day);

// Parse CorrectTime into hours and minutes
const [hoursStr, minsStr] = CorrectTime.split(':');
const hoursInt = parseInt(hoursStr, 10);
const minsInt = parseInt(minsStr, 10);

// console.log("hour: ", hoursInt);
// console.log("min: ", minsInt);

// Set the time part to the date object
dateObj.setHours(hoursInt);
dateObj.setMinutes(minsInt);

// Format the deadline
const deadline = dateObj.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

// Now deadline contains both date and time combined correctly
// console.log("countdown deadline : ", deadline); // Example output: "May 4, 2024, 19:30"

    const getTime =()=> {
        const time = Date.parse(deadline)- Date.now()

        if (time <= 0) {
            // If time is zero or negative, stop the countdown
            clearInterval(interval);
            setDays(0);
            setHours(0);
            setMins(0);
            setSecs(0);
        } else {
            // Update the countdown values
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMins(Math.floor((time / 1000 / 60) % 60));
            setSecs(Math.floor((time / 1000) % 60));
        }

        // setDays(Math.floor(time/(1000*60*60*24)))
        // setHours(Math.floor(time/(1000*60*60)%24))
        // setMins(Math.floor((time/1000/60)%60))
        // setSecs(Math.floor((time/1000)%60))
    }

    useEffect(() => {
            const interval = setInterval(() => getTime(deadline),1000)
            return()=> clearInterval(interval)
    }, [])

  return (
    <div>
<div className='w-full text-center text-xl font-semibold text-black'>
  {(days === 0 && hours === 0 && mins === 0 && secs === 0) ? "Match Starts In:" : "Match Starts In:"}
</div>
<div className="grid grid-flow-col justify-center justify-items-center gap-5 text-center auto-cols-max text-black mb-4 mt-2">
    {/* <br></br> */}
  <div className="flex flex-col p-2  border-[black]-900 bg-transparent rounded-2xl border-4 text-neutral-content">
    <span className="countdown font-mont md:text-5xl text-3xl">
      <span>{days<10 ? "0" + days: days}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2   border-[black]-900 bg-transparent rounded-2xl border-4 text-neutral-content">
    <span className="countdown font-mont md:text-5xl text-3xl">
      <span >{hours<10 ? "0" + hours: hours}</span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2   border-[black]-900 bg-transparent rounded-2xl border-4 text-neutral-content">
    <span className="countdown font-mont  md:text-5xl text-3xl">
      <span>{mins<10 ? "0" + mins: mins}</span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2   border-[black]-900 bg-transparent rounded-2xl border-4 text-neutral-content">
    <span className="countdown font-mont  md:text-5xl text-3xl">
      <span>{secs<10 ? "0" + secs: secs}</span>
    </span>
    sec
  </div>
</div>
<div className='w-full text-center text-xl font-semibold m-0 text-black mb-8'>
  {(days === 0 && hours === 0 && mins === 0 && secs === 0) ? "Match Already Started!!!" : ""}
  <br></br>
  {/* {"Live"} */}
  <span className='uppercase mb-6 animate-text bg-gradient-to-r from-customRed via-customBrown to-orange-500 bg-clip-text text-transparent text-2xl font-black'>
  {(days === 0 && hours === 0 && mins === 0 && secs === 0) ? "• Live Now •" : ""}
  </span>
</div>
    </div>
  )
}

export default countdown
