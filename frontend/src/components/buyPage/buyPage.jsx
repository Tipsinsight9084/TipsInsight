import React from 'react'
// import './buyPage.css'
import Footer from '../footer'
  import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios'
import Box from '../../box';
import LoadingAnimation from '../Loader/Loader';
// import Heading from './Heading.jsx'

import NavBar from '../navbarr';
import Whatsapp_floating from '../floating/Whatsapp_floating';
import Telegram_floating from '../floating/Telegram_floating';
import CS from '../../assets/LPL/CS.png'
import DS from '../../assets/LPL/DS.png'
import GMLPL from '../../assets/LPL/GM.png'
import JK from '../../assets/LPL/JK.png'
import BLK from '../../assets/LPL/BLK.png'
import CSK from '../../assets/CSK.png'
import MI from '../../assets/MI.png'
import LSG from '../../assets/LSG.png'
import GT from '../../assets/GT.png'
import KKR from '../../assets/KKR.png'
import PBKS from '../../assets/PBKS.png'
import SRH from '../../assets/SRH.png'
import RR from '../../assets/RR.png'
import RCB from '../../assets/RCB.png'
import DC from '../../assets/DC.png'
import SIX from '../../assets/SIX.png'
import STA from '../../assets/STA.png'
import STR from '../../assets/STR.png'
import THU from '../../assets/THU.png'
import REN from '../../assets/REN.png'
import SCO from '../../assets/SCO.png'
import HEA from '../../assets/HEA.png'
import HUR from '../../assets/HUR.png'
import SEC from '../../assets/SEC.png'
import DSG from '../../assets/DSG.png'
import PR from '../../assets/PR.png'
import PC from '../../assets/PC.png'
import JSK from '../../assets/JSK.png'
import MICT from '../../assets/MICT.png'
import WI from '../../assets/WI.png'
import PAK from '../../assets/PAK.png'
import SA from '../../assets/SA.png'
import ENG from '../../assets/ENG.png'
import AUS from '../../assets/AUS.png'
import IND from '../../assets/IND.png'
import NZ from '../../assets/NZ.png'
import SL from '../../assets/SL.png'
import NED from '../../assets/NED.png'
import AFG from '../../assets/AFG.png'
import OMA from '../../assets/OMG.png'
import PAP from '../../assets/POP.png'
import SCOT from '../../assets/SCOT.png'
import IRE from '../../assets/IRE.png'
import NAM from '../../assets/NAM.png'
import BAN from '../../assets/BAN.png'
import USA from '../../assets/USA.png'
import UGA from '../../assets/UGA.png'
import CAN from '../../assets/CAN.png'
import NEP from '../../assets/NEP.png'
import CSG from '../../assets/TNPL/CSG.png'
import ITT from '../../assets/TNPL/ITT.png'
import LKK from '../../assets/TNPL/LKK.png'
import SMP from '../../assets/TNPL/SMP.png'
import NRK from '../../assets/TNPL/NRK.png'
import TGC from '../../assets/TNPL/TGC.png'
import DD from '../../assets/TNPL/DD.png'
import SS from '../../assets/TNPL/SS.png'
import WF from '../../assets/TH/WF(2).png'
import TR from '../../assets/TH/TR.png'
import SB from '../../assets/TH/SB.png'
import BP from '../../assets/TH/BP.png'
import NSC from '../../assets/TH/NSC(2).png'
import OI from '../../assets/TH/OI.png'
import MO from '../../assets/TH/MO(2).png'
import LS from '../../assets/TH/LS(2).png'

import MW from '../../assets/KSCA24/MW.jpeg'
import MD from '../../assets/KSCA24/MD.png'
import HT from '../../assets/KSCA24/HT.png'
import BB from '../../assets/KSCA24/BB.jpeg'
import GM from '../../assets/KSCA24/GM.webp'
import SLKSCA from '../../assets/KSCA24/SL.webp'
function BuyPage()  {


  
  let pred_heading = "Predicted Result"
  
  const  {uniqueId}  = useParams();
  const [Details, setDetails] = useState(null);

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

  logos["Lanka Premier League"] = {
    'CS': CS,
    'JK': JK,
    'DS': DS,
    'GM': GM,
    'BLK': BLK,
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

 logos["The Hundred Mens"] = {
  'BP-M':BP,
  'LS-M':LS,
  'WF-M':WF,
  'NSC-M':NSC,
  'TR-M':TR,
  'SB-M':SB,
  'OI-M':OI,
  'MO-M':MO,
 }

 logos["Maharaja T20"] = {
  'MD': MD,
  'MW': MW,
  'HT': HT,
  'BB': BB,
  'SL': SLKSCA,
  'GM': GM
}


 logos["WI vs SA T20"] = {
  'WI':WI,
  'SA':SA
}

logos["ENG vs PAK T20"] = {
  'ENG':ENG,
  'PAK':PAK
}

logos["Cricket World Cup"] = {
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

logos["SA T20 League"] = {
'SEC':SEC,
'DSG':DSG,
'PR':PR,
'JSK':JSK,
'PC':PC,
'MICT':MICT
}

logos["T20 World Cup"] = {
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

logos["Tamil Nadu Premier League"] = {
  'CSG':CSG,
  'LKK':LKK,
  'ITT':ITT,
  'SMP':SMP,
  'NRK':NRK,
  'SS':SS,
  "DD":DD,
  'TGC':TGC
}


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
  
  console.log("hey2  ", uniqueId);
  const [upcomingmatchTH,setUpcomingmatchTH] = useState([])
  const [upcomingmatchtnpl,setUpcomingmatchtnpl] = useState([])
  const [upcomingmatchKSCA,setUpcomingmatchKSCA] = useState([])

  useEffect(() => {
    // Fetch event details from the backend using uniqueId
    fetch(`https://tips-insight-m7y6-backend.vercel.app/matchdetails/${uniqueId}`,)
    .then((response) => response.json())
    .then((data) => setDetails(data))
    .catch((error) => console.error('Error fetching event details:', error));
  }, [uniqueId]);

   

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
  
  if (!Details) {
    return (
      <LoadingAnimation/>
    );
  }
console.log("Detailss:: ", Details)
const data = Details

const newmatchDate = new Date(new Date(data.matchDate).getTime() - (11 * 60 * 60 * 1000));


const date = new Date(newmatchDate);
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
let index = data.uniqueId.indexOf('_')
const match_no = data.uniqueId.substring(index+1)

var scorecard = true;

function redirectToWhatsApp() {
  // Phone number with country code
  const phoneNumber = "918445659152";
  // Default message (URL encoded)
  const defaultMessage = encodeURIComponent(`Hello there, I would like to talk to you about the match between ${Details.team1} & ${Details.team2} Teams.`);
  // Construct WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
  // Redirect to WhatsApp
  window.location.href = whatsappUrl;
}
  return (
        <div className='bg-[#F2F2F2] m-0 p-0 overscroll-x-none overflow-x-hidden'> {/* Adjusted padding for smaller devices */}
 <NavBar/>

{/* <nav className=" bg-gradient-to-r from-customRed to-customBrown py-6 fixed top-0 border-red-600 md:w-[100%] w-[80%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center text-white text-4xl font-bold">
          {/* <Link to="/" className="text-white text-lg font-bold">My Website</Link> */}
          {/* AKC.
        </div>
        {/* <div className="flex space-x-8">
          <Link to="/buy" className="text-gray-300 hover:text-white">Buy</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/prediction" className="text-gray-300 hover:text-white">Prediction</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div> */}
      {/* </div> */}
    {/* </nav>  */} 
    {/* <div>
      <div className='w-full bg-white h-6 pt-40'> </div>
    </div> */}
  <div className='overscroll-x-none overflow-x-hidden'>
   
   <div className="md:w-full mx-5 md:w-4/5 lg:w-4/5 xl:w-8/12 md:mx-auto pt-10 md:pt-15"> {/* Centered and adjusted width */}
     <div className=" rounded-3xl bg-gradient-to-r from-customBrown via-customRed to-customBrown p-1.5">
      
       <div className="text-center my-5">
         <div className="font-mont font-bold md:text-2xl text-sm md:text-3xl text-white "> {/* Adjusted font size */}
         {data.series ? data.series : 'Indian Premier League'} {data.year?data.year:'2024'}
         </div>
         <div className="font-mont md:text-lg text-sm md:text-2xl font-semibold text-white"> {/* Adjusted font size */}
           {match_no}<sup>th</sup> Match
         </div>
       </div>
       <div className=" md:mt-6 w-full bg-white p-4 border-x-[0px]  rounded-b-3xl flex flex-col items-center">
         <div className="md:font-bold flex  flex-row md:flex-row items-center justify-between px-0 md:px-0 py-4 md:py-8 w-full ">
           {/* <div className="md:mx-8 flex flex-row justify-center items-center w-full md:w-auto md:rounded-md"> Adjusted margin and width */}
             {/* <div className=" flex text-lg md:text-2xl w-full flex justify-between items-center"> */}
              <div className='basis-3/7 flex flex-col items-center  m-auto'>
           <img src={logos[data.series][data.team1]} alt="Team 1 image" className=" w-auto h-16" /> {/* Adjusted image size */}
               <div className="md:px-4 m-auto md:text-2xl text-xs font-bold text-center">{data.team1}</div>
               </div>

               <div className=" basis-1/7 px-4 md:text-3xl text-sm font-bold">V/S</div>
               <div className='basis-3/7 flex flex-col-reverse items-center m-auto'>
               <div className="md:px-4 m-auto md:text-2xl text-xs font-bold text-center">{data.team2}</div>

               <img src={logos[data.series][data.team2]} alt="Team 2 image" className=" w-auto h-16"/> {/* Adjusted image size */}
               </div>
             {/* </div> */}
           {/* </div> */}
         </div>
         {/* <div className='divide-y'></div> */}
         <div className="font-mont font-semibold text-xs md:text-5xl md:text-base mt-2 divide-y text-center"> {/* Adjusted font size */}
         {weekday}, {day}{' '}{monthNames[monthIndex]}, {time}
        
       </div>
     </div>
   </div>

   </div>
   <div className='divide-y md:py-28 py-4 mb-8'> 

         <div className='w-full divide-y md:pt-2'>

          <div className='flex flex-row items-center md:w-[75%] w-[80%] m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl'> 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
            Toss Prediction :
            </div>
            <button onClick={redirectToWhatsApp} className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-2 md:px-12 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-36 md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out mx-2">
  Buy now
</button>
          </div>
          </div>
          <div className='w-full divide-y pt-2'>
            
          <div className='flex flex-row items-center  md:w-[75%] w-[80%]  m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl'> 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
              Match Prediction :
            </div>
            <button onClick={redirectToWhatsApp}className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-12 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-36 md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out mx-2">
  Buy now
</button>
          </div>
          </div>
          <div className='w-full divide-y pt-2'>
            
          <div className='flex flex-row items-center  md:w-[75%] w-[80%]  m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl' > 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
              Overall Prediction :
            </div>
            <button onClick={redirectToWhatsApp} className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-12 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-36 md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out mx-2">
  Buy now
</button>
          </div>
          </div>
         {/* <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto ">
Buy Now
</button> */}



         </div>

         { 
  upcomingmatchKSCA &&
  <Box Matches={upcomingmatchKSCA} League="Maharaja T20" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 } 
   
      
  {/* /*
{
  upcomingmatchtnpl &&
  <Box Matches={upcomingmatchtnpl} League="Tamil Nadu Premier League" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 } */ }

         <div className='md:mt-10 mt-16'>
          <p className='w-[80%] md:mt-10 m-auto text-sm md:text-xl text-center font-semibold'>We strictly secure your identity with each and every detail like your Name, Contact details and all other details which we have.</p>

          <br></br>
          {/* <br></br> */}

          <p className='w-[80%]  md:mt-10 m-auto text-sm md:text-xl text-center font-semibold'>Client and their privacy is our first priority.</p>

          <br></br>
          {/* <br></br> */}

          <p className='w-[80%]  md:mt-10 m-auto text-sm md:text-xl text-center font-semibold' >DISCLAIMER : We only provide accurate Sports and Market predictions based on predictive science. We do not encourage Sports betting as well as predictions to be viewed as cricket betting tips or football betting tips on this website. We never misguide anyone or either approach people to use in inappropriate manner.</p>
         </div>

<br></br>
<br></br>
<br></br>
<br></br>
         <div className='w-[90%] m-auto text-center my-10'>
 
          <ul className='list-inside list-disc '>
            <li>These services should just be objective above 18+ Users.</li>
            <li>The ads + landing page should just promote day by day Fantasy Sports.</li>
            <li>The promotion can target India just and exclude the province of Telangana, Orissa, Assam, Sikkim and Nagaland because of nearby laws.</li>
          </ul>
         </div>

       
 </div>
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
 </div>
  )
}

export default BuyPage
