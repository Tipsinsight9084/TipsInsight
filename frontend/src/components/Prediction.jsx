import React, { useState } from 'react';
import NavBar from './navbarr';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Heading from './Heading.jsx'
import SEC from '../assets/SEC.png'
import DSG from '../assets/DSG.png'
import PR from '../assets/PR.png'
import PC from '../assets/PC.png'
import JSK from '../assets/JSK.png'
import MICT from '../assets/MICT.png'
import OMA from '../assets/OMG.png'
import PAP from '../assets/POP.png'
import SCOT from '../assets/SCOT.png'
import IRE from '../assets/IRE.png'
import NAM from '../assets/NAM.png'
import BAN from '../assets/BAN.png'
import CS from '../assets/LPL/CS.png'
import DS from '../assets/LPL/DS.png'
import GMLPL from '../assets/LPL/GM.png'
import JK from '../assets/LPL/JK.png'
import BLK from '../assets/LPL/BLK.png'
import USA from '../assets/USA.png'
import UGA from '../assets/UGA.png'
import CAN from '../assets/CAN.png'
import NEP from '../assets/NEP.png'
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
import CSG from '../assets/TNPL/CSG.png'
import ITT from '../assets/TNPL/ITT.png'
import LKK from '../assets/TNPL/LKK.png'
import SMP from '../assets/TNPL/SMP.png'
import NRK from '../assets/TNPL/NRK.png'
import TGC from '../assets/TNPL/TGC.png'
import DD from '../assets/TNPL/DD.png'
import SS from '../assets/TNPL/SS.png'
import WI from '../assets/WI.png'
import PAK from '../assets/PAK.png'
import SA from '../assets/SA.png'
import ENG from '../assets/ENG.png'
import AUS from '../assets/AUS.png'
import IND from '../assets/IND.png'
import NZ from '../assets/NZ.png'
import SL from '../assets/SL.png'
import NED from '../assets/NED.png'
import AFG from '../assets/AFG.png'
import WF from '../assets/TH/WF(2).png'
import TR from '../assets/TH/TR.png'
import SB from '../assets/TH/SB.png'
import BP from '../assets/TH/BP.png'
import NSC from '../assets/TH/NSC(2).png'
import OI from '../assets/TH/OI.png'
import MO from '../assets/TH/MO(2).png'
import LS from '../assets/TH/LS(2).png'
import MW from '../assets/KSCA24/MW.jpeg'
import MD from '../assets/KSCA24/MD.png'
import HT from '../assets/KSCA24/HT.png'
import BB from '../assets/KSCA24/BB.jpeg'
import GM from '../assets/KSCA24/GM.webp'
import SLKSCA from '../assets/KSCA24/SL.webp'
import Footer from './footer.jsx';
import LoadingAnimation from './Loader/Loader.jsx';
import Whatsapp_floating from './floating/Whatsapp_floating.jsx';
import Telegram_floating from './floating/Telegram_floating.jsx';
import Box from '../box.jsx';
function Prediction_Page() {

  let pred_heading = "Predicted Result"

  const  {uniqueId}  = useParams();
  const [Details, setDetails] = useState(null);
  console.log(uniqueId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Inside");
        // Fetch event details from the backend using uniqueId
        const response = await fetch(`https://tips-insight-m7y6-backend.vercel.app/matchdetails/${uniqueId}`);
        // const response = await fetch(`http://localhost:3000/matchdetails/${uniqueId}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };
  
    fetchData(); // Invoke the async function immediately
  
  }, []);
  

  const data = Details

  // let league = data.series

  const Logos = {}

   Logos[undefined] = {
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

  Logos["The Hundred Mens"] = {
    'BP-M':BP,
    'LS-M':LS,
    'WF-M':WF,
    'NSC-M':NSC,
    'TR-M':TR,
    'SB-M':SB,
    'OI-M':OI,
    'MO-M':MO,
   }

  Logos["Big Bash League"] = {
    'SIX':SIX,
    'STA':STA,
    'THU':THU,
    'HEA':HEA,
    'REN':REN,
    'HUR':HUR,
    'SCO':SCO,
    'STR':STR
 }

 Logos["WI vs SA T20"] = {
  'WI':WI,
  'SA':SA
}

Logos["ENG vs PAK T20"] = {
  'ENG':ENG,
  'PAK':PAK
}

Logos["Cricket World Cup"] = {
  'NED':NED,
  'SA':SA,
   'IND':IND,
   'AUS':AUS,
   'NZ':NZ,
   'AFG':AFG,
   'BAN':BAN,
   'SL':SL,
  'ENG':ENG,
  'PAK':PAK
}

Logos["SA T20 League"] = {
  'SEC':SEC,
  'DSA':DSG,
  'PR':PR,
  'JSK':JSK,
  'PC':PC,
  'MICT':MICT
 }

 Logos["Maharaja T20"] = {
  'MD': MD,
  'MW': MW,
  'HT': HT,
  'BB': BB,
  'SL': SLKSCA,
  'GM': GM
}

 Logos["Lanka Premier League"] = {
  'CS': CS,
  'JK': JK,
  'DS': DS,
  'GM': GMLPL,
  'BLK': BLK,
}


Logos["T20 World Cup"] = {
  'NED':NED,
  'SA':SA,
   'IND':IND,
   'AUS':AUS,
   'NZ':NZ,
   'AFG':AFG,
   'BAN':BAN,
   'SL':SL,
  'ENG':ENG,
  'PAK':PAK,
  'WI':WI,
  'CAN':CAN,
  'PAP':PAP,
  'OMA':OMA,
  'SCOT':SCOT,
  'NAM':NAM,
  'USA':USA,
  'UGA':UGA,
  'NEP':NEP,
  'IRE':IRE
}

Logos["Tamil Nadu Premier League"] = {
  'CSG':CSG,
  'LKK':LKK,
  'ITT':ITT,
  'SMP':SMP,
  'NRK':NRK,
  'SS':SS,
  "DD":DD,
  'TGC':TGC
}

  const full_names = {}

   full_names[undefined] = {
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

  full_names["The Hundred Mens"] = {
    'BP-M':"Birmingham Phoenix Men",
    'LS-M':"London Spirit Men",
    'WF-M':"Welsh Fire Men",
    'NSC-M':"Northern SuperChargers Men",
    'TR-M':"Trent Rockets Men",
    'SB-M':"Southern Brave Men",
    'OI-M':"Oval Invincibles Men",
    'MO-M':"Manchester Originals Men",
  }

  full_names["WI vs SA T20"] = {
    'WI' : "West Indies",
    'SA' : 'South Africa'
  }

  full_names["ENG vs PAK T20"] = {
    'ENG' : "England",
    'PAK' : 'Pakistan'
  }

  full_names["Cricket World Cup"] = {
    'WI' : "West Indies",
    'SA' : 'South Africa',
    'ENG' : "England",
    'PAK' : 'Pakistan',
    'IND' : 'India',
    'AUS':'Australia',
    'NZ' : 'New Zealand',
    'NED': 'Netherlands',
    'SL':'Sri Lanka',
    'AFG':'Afghanistan',
    'BAN':'Bangladesh'
  }

  full_names["T20 World Cup"] = {
    'WI' : "West Indies",
    'SA' : 'South Africa',
    'ENG' : "England",
    'PAK' : 'Pakistan',
    'IND' : 'India',
    'AUS':'Australia',
    'NZ' : 'New Zealand',
    'NED': 'Netherlands',
    'SL':'Sri Lanka',
    'AFG':'Afghanistan',
    'BAN':'Bangladesh',
     'NEP': 'Nepal',
     'CAN':'Canada',
     'IRE':'Ireland',
     'NAM':'Namibia',
     'OMA':'Oman',
     'PAP':'Papua New Guinea',
     'SCOT':'Scotland',
     'UGA':'Uganda',
     'USA':'United States of America',
  }

  full_names["SA T20 League"]={
    'SEC': 'Sunrisers Eastern Cape',
     'MICT': 'MI Capt Town',
     'DSG': 'Durban Super Giants',
     'JSK':'Joburg Super Kings',
     'PR':'Paari Royals',
     'PC': 'Pretoria Capitals'
  }

  full_names["Maharaja T20"]={
    'BB': 'Bengaluru Blasters',
     'MD': 'Mangaluru Dragons',
     'MW': 'Mysuru Warriors',
     'HT':'Hubli Tigers',
     'GM':'Gulbarga Mystics',
     'SL': 'Shivamogga Lions'
  }

  full_names["Lanka Premier League"] = {
    'CS': 'Colombo Strikers',
    'DS': 'Dambulla Sixers',
    'BLK':'B-Love Kandy',
    'JK':'Jaffana Kings',
    'GM':'Galle Marvels',

  }

  full_names["Tamil Nadu Premier League"] = {
   'LKK':"Lyca Kovai Kings",
   'CSG':"Chepauk Super Gillies",
   'DD':"Dindigul Dragons",
   "SS":"Salem Spartans",
   "SMP":"Siechem Madurai Panthers",
   'NRK':"Nellai Royal Kings",
   "ITT":"Idream Tiruppur Tamizhans",
   "TGC":"Trichy Grand Cholas"
  }

  
  // console.log("hey2  ", uniqueId);
  
  const [upcomingmatchKSCA,setUpcomingmatchKSCA] = useState([]);
  const [upcomingmatchTH,setUpcomingmatchTH] = useState([]);
 

  useEffect(() => {
    async function fetchupcomingMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/upcomingmatches/KSCA24');
        const matchData = await response.json();
        setUpcomingmatchKSCA(matchData);
      } catch (error) {
        console.error('Error fetching upcoming match:', error);
      }
    }

    fetchupcomingMatch();
  }, []); //
  
  useEffect(() => {
    async function fetchupcomingMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/upcomingmatches/TH24');
        const matchData = await response.json();
        setUpcomingmatchTH(matchData);
      } catch (error) {
        console.error('Error fetching upcoming match:', error);
      }
    }

    fetchupcomingMatch();
  }, []); // 



  if (!Details) {
    return (
      <LoadingAnimation/>
    );
    
  }

console.log("deatisl : ", Details)
// const data = Details



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
  
   time = parseInt(time)
   if(time<12){
    time = time + ":00 am"
  }

  else{
    time = time -12 + ":00 pm"
  }
  console.log("predited time",time)
   let index = data.uniqueId.indexOf('_')
  const match_no = data.uniqueId.substring(index+1)

  var scorecard = true;

  let predictiontimetoss = data.tossTime
  let predictionmatch = data.matchwinnerTime
  
  //  time = parseInt(time)


  return (
    <>
    <NavBar/>
    {/* <Heading heading={pred_heading}/> */}
    <div> {/* Adjusted padding for smaller devices */}
   
   <div className="mt-6 mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto"> {/* Centered and adjusted width */}
     <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
       <div className="text-center">
         <div className="font-mont font-extrabold text-xl md:text-3xl text-white"> {/* Adjusted font size */}
         {data.series ? data.series : 'Indian Premier League'} {data.year?data.year:'2024'}
         </div>
         <div className="font-mont text-white text-lg md:text-2xl font-semibold"> {/* Adjusted font size */}
           {match_no}th Match
         </div>
       </div>
       <div className="mt-4 pb-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center">
       <div className="font-mont font-extrabold text-sm md:text-base mt-2 md:mt-4"> {/* Adjusted font size */}
         {weekday}, {day}{' '}{monthNames[monthIndex]} {time}
         </div>
         <div className="font-bold flex flex-row items-center justify-between px-4 md:px-12 py-4 md:py-2 w-full rounded-md">
              <div className="flex flex-col justify-between md:pt-4 w-72 md:flex-row items-center">
                <img className="w-auto h-16 md:h-32"src={Logos[data.series][data.team1]} alt="" />
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
                <img className="w-auto h-16 md:h-32"src={Logos[data.series][data.team2]} alt="" />
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
             <img className="w-auto h-24" src={Logos[data.series][data.tossWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-xl md:text-4xl font-mont' >
                  {full_names[data.series][data.tossWinner]}
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

            <div className='mb-12'>

            <div className="text-center my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-14 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown md:w-auto">
  Match Prediction
            </div>

            <div className='w-[95%] flex flex-row-reverse justify-evenly py-4'>
              <div >
             <img className="w-auto h-24" src={Logos[data.series][data.matchWinner]} alt="" />
              </div>

              <div className='flex flex-col mx-4'>
                <div className='text-customBrown font-bold text-xl md:text-4xl font-mont'>
                  {full_names[data.series][data.matchWinner]}
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

    {
  upcomingmatchKSCA &&
  <Box Matches={upcomingmatchKSCA} League="Maharaja T20" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 }

 

{/* {
  upcomingmatchtnpl &&
  <Box Matches={upcomingmatchtnpl} League="Tamil Nadu Premier League" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 }  */}
  

  

   <Footer/>

   <div className='md:h-[32vh] h-[8vh]'></div>

{/* <div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-28 md:mb-48 rounded-full border-[0px]  bg-transparent'>
  <Telegram_floating/>
</div>

</div> */}


<div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-16 md:mb-28 rounded-full border-[0px]  bg-transparent'>
  <Whatsapp_floating/>
</div>

</div>

 </>
);
}

export default Prediction_Page;
