import React from 'react'
// import './buyPage.css'
import Footer from '../footer'
  import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios'
import LoadingAnimation from '../Loader/Loader';
// import Heading from './Heading.jsx'

import NavBar from '../navbarr';
import Whatsapp_floating from '../floating/Whatsapp_floating';
import Telegram_floating from '../floating/Telegram_floating';

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


  
  // const full_names = {
  //   'MI': "Mumbai Indians",
  //   'RCB': "Royal Challengers Banglore",
  //   'SRH': "Sunrisers Hyderabad",
  //   'KKR': "Kolkata Knight Riders",
  //   'LSG': "Lucknow Supergiants",
  //   'DC': "Delhi Capitals",
  //   'RR': "Rajasthan Royals",
  //   'PBKS': "Punjab Kings",
  //   'GT': "Gujarat Titans",
  //   'CSK': "Chennai Super Kings",
  // }

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

time = parseInt(time)-12
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
         {weekday}, {day}{' '}{monthNames[monthIndex]}, {time +":30"+ " PM"}
        
       </div>
     </div>
   </div>

   </div>
   <div className='divide-y md:py-28 py-4'> 

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

         <div className='md:mt-10 mt-5'>
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
 </div>
  )
}

export default BuyPage
