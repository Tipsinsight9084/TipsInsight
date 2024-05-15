import React, { useState } from 'react';
import NavBar from './navbarr';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Heading from './Heading.jsx'
import CSK from '../assets/CSK.png'
import MI from '../assets/MI.png'
import LSG from '../assets/LSG.png'
import GT from '../assets/GT.png'
import KKR from '../assets/KKR.png'
import PBKS from '../assets/PBKS.png'
import SRH from '../assets/SRH.png'
import RR from '../assets/RR.png'
import RCB from '../assets/RCB.png'
import DC from '../assets/DC.png'
import SIX from '../assets/SIX.png'
import STA from '../assets/STA.png'
import STR from '../assets/STR.png'
import THU from '../assets/THU.png'
import REN from '../assets/REN.png'
import SCO from '../assets/SCO.png'
import HEA from '../assets/HEA.png'
import HUR from '../assets/HUR.png'
import Footer from './footer.jsx';
import LoadingAnimation from './Loader/Loader.jsx';
import Whatsapp_floating from './floating/Whatsapp_floating.jsx';
import Telegram_floating from './floating/Telegram_floating.jsx';

function Prediction_Page() {

  let pred_heading = "Predicted Result"

  const  {uniqueId}  = useParams();
  const [Details, setDetails] = useState(null);

  
  let league = uniqueId.substring(0,3)
  let Year = "2023";

  if(league==="IPL"){
    league= "Indian Premier League"
    Year = "2024"
  }

  else{
    league="Big Bash League"
    Year = "2023-24"
  }

  const logos = {}

   logos["Indian Premier League"] = {
    'MI': MI,
    'RCB': RCB,
    'SRH': SRH,
    'KKR': KKR,
    'LSG': LSG,
    'DC': DC,
    'RR': RR,
    'PBKS': PBKS,
    'GT': GT,
    'CSK': CSK,
  }

  logos["Big Bash League"] = {
    'SIX':SIX,
    'STA':STA,
    'THU':THU,
    'HEA':HEA,
    'REN':REN,
    'HUR':HUR,
    'SCO':SCO,
    'STR':STR
 }

  const full_names = {}

   full_names["Indian Premier League"] = {
    'MI': "Mumbai Indians",
    'RCB': "Royal Challengers Banglore",
    'SRH': "Sunrisers Hyderabad",
    'KKR': "Kolkata Knight Riders",
    'LSG': "Lucknow Supergiants",
    'DC': "Delhi Capitals",
    'RR': "Rajasthan Royals",
    'PBKS': "Punjab Kings",
    'GT': "Gujarat Titans",
    'CSK': "Chennai Super Kings",

  }

  full_names["Big Bash League"] = {
    'SIX' : "Sydney Sixers",
    "HEA" : "Brisbane Heat",
    'SCO' : "Perth Scorchers",
    'STR': 'Adelaide Strikers',
     'HUR' : 'Hobart Hurricanes',
     "STA" : 'Melbourne Stars',
     'THU'  : 'Sydney Thunder',
     "REN" : 'Renegades'
  }

  
  console.log("hey2  ", uniqueId);
  useEffect(() => {
    // Fetch event details from the backend using uniqueId
   fetch(`https://tipsinsight.onrender.com/matchdetails/${uniqueId}`,)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

  if (!Details) {
    return (
      <LoadingAnimation/>
    );
    
  }

console.log(Details)
const data = Details



const newmatchDate = new Date(new Date(data.matchDate).getTime() - (11 * 60 * 60 * 1000));


const date = new Date(newmatchDate);


// const date = new Date(data.matchDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  // Array of weekday names
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Get the weekday (0-6)
  const weekdayIndex = date.getDay();
  const weekday = weekdayNames[weekdayIndex];

  
 
  let time = data.time
  
   time = parseInt(time)-12
   let index = data.uniqueId.indexOf('_')
  const match_no = data.uniqueId.substring(index+1)

  var scorecard = true;

  let predictiontimetoss = data.tossTime
  let predictionmatch = data.matchwinnerTime
  
   time = parseInt(time)


  return (
    <>
    <NavBar/>
    {/* <Heading heading={pred_heading}/> */}
    <div> {/* Adjusted padding for smaller devices */}
   
   <div className="mt-6 mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto"> {/* Centered and adjusted width */}
     <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
       <div className="text-center">
         <div className="font-mont font-extrabold text-xl md:text-3xl text-white"> {/* Adjusted font size */}
           {league} {Year}
         </div>
         <div className="font-mont text-white text-lg md:text-2xl font-semibold"> {/* Adjusted font size */}
           {match_no}th Match
         </div>
       </div>
       <div className="mt-4 pb-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center">
       <div className="font-mont font-extrabold text-sm md:text-base mt-2 md:mt-4"> {/* Adjusted font size */}
         {weekday}, {day}{' '}{monthNames[monthIndex]}, {time +":30"+ " PM"}
         </div>
         <div className="font-bold flex flex-row items-center justify-between px-4 md:px-12 py-4 md:py-2 w-full rounded-md">
              <div className="flex flex-col justify-between md:pt-4 w-72 md:flex-row items-center">
                <img className="w-auto h-16 md:h-32"src={logos[league][data.team1]} alt="" />
                <div className='flex flex-col justify-center items-center'>
                <div className="font-mont font-bold md:text-2xl">{data.team1}</div>
               {scorecard && <div className="flex flex-col items-center font-mont font-semibold text-sm md:text-md">
                  <span>{data.team1Run + '-' + data.team1Wicket}</span>
                  <span>{'(' + data.team1Over + ')'}</span>
                </div>
}
              </div>
              </div>

              <div className="font-mont font-bold text-2xl">vs</div>

              <div className="flex flex-col-reverse justify-between md:pt-4 w-72 md:flex-row items-center">
                <div className='flex flex-col justify-center items-center'>
                <div className="font-mont font-bold md:text-2xl">{data.team2}</div>
                {scorecard && <div className="flex flex-col items-center font-mont font-semibold text-sm md:text-md">
                  <span>{data.team2Run + '-' + data.team2Wicket}</span>
                  <span>{'(' + data.team2Over + ')'}</span>
                </div>
} 
              </div>
                <img className="w-auto h-16 md:h-32"src={logos[league][data.team2]} alt="" />
              </div>


            </div>

            {scorecard && <div className="font-mont font-bold text-sm md:text-base mt-2 md:mt-4">
              {data.highlight}
            </div>
}
         {/* <div className=" my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Toss Prediction
            </div>

            <div className='flex py-4'>
              <div >
             <img className="w-20 md:w-36 h-16" src={logos[data.tossWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-2xl font-mont' >
                  {full_names[data.tossWinner]}
                </div>

               <div className='text-gray-500 tracking-widest'>
                 will win the toss
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated: 24th april, 06:00 PM
               </div>
              </div>
            </div>

            <div className=" my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Match Prediction
            </div>

            <div className='flex flex-row-reverse py-4'>
              <div >
             <img className="w-20 md:w-36 h-16" src={logos[data.matchWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-2xl font-mont'>
                  {full_names[data.matchWinner]}
                </div>

               <div className='text-gray-500 tracking-widest'>
                 will win the match
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated: 24th april, 06:00 PM
               </div>
              </div>
            </div> */}
       </div>

      
            
     </div>
   </div>
 </div>

 <div className="mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-full justify-center mx-auto">
     {/* <div className="rounded-3xl bg-gradient-to-r from-customRed to-customBrown">
       */}
       <div className="mt-4 px-0 md:mt-6 w-full md:w-full bg-customgray flex flex-col justify-center gap-10 md:flex-row md:px-0 ">
       
        <div>
  
         <div className="text-center my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-14 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Toss Prediction
            </div>



            <div className='w-[95%] flex justify-evenly py-4'>
              <div >
             <img className="w-auto h-24" src={logos[league][data.tossWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-xl md:text-4xl font-mont' >
                  {full_names[league][data.tossWinner]}
                </div>

               <div className='text-gray-500 text-lg md:text-xl tracking:wide md:tracking-widest'>
                 will win the toss
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated:  {day}{' '}{monthNames[monthIndex]}, {predictiontimetoss}
               </div>
              </div>
            </div>
            </div>

            <div>

            <div className="text-center my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-14 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Match Prediction
            </div>

            <div className='w-[95%] flex flex-row-reverse justify-evenly py-4'>
              <div >
             <img className="w-auto h-24" src={logos[league][data.matchWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-xl md:text-4xl font-mont'>
                  {full_names[league][data.matchWinner]}
                </div>

               <div className='text-gray-500 text-lg md:text-xl tracking-wide md:tracking-widest'>
                 will win the match
               </div>

               <div className='font-mont text-gray-500 font-bold text-sm'>
                  Last Updated: {day}{' '}{monthNames[monthIndex]},{predictionmatch}
               </div>
              </div>
            </div>
            </div>
       </div>

      
            
    </div>
  

   <Footer/>

   <div className='md:h-[32vh] h-[8vh]'></div>

<div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-28 md:mb-48 rounded-full border-[0px]  bg-transparent'>
  <Whatsapp_floating/>
</div>

</div>


<div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-16 md:mb-28 rounded-full border-[0px]  bg-transparent'>
  <Telegram_floating/>
</div>

</div>

 </>
);
}

export default Prediction_Page;
