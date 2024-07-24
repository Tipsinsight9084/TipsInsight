import React from "react";
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
import SEC from '../assets/SEC.png'
import DSG from '../assets/DSG.png'
import PR from '../assets/PR.png'
import PC from '../assets/PC.png'
import JSK from '../assets/JSK.png'
import MICT from '../assets/MICT.png'
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
import OMA from '../assets/OMG.png'
import PAP from '../assets/POP.png'
import SCOT from '../assets/SCOT.png'
import IRE from '../assets/IRE.png'
import NAM from '../assets/NAM.png'
import BAN from '../assets/BAN.png'
import USA from '../assets/USA.png'
import UGA from '../assets/UGA.png'
import CAN from '../assets/CAN.png'
import NEP from '../assets/NEP.png'
import CS from '../assets/LPL/CS.png'
import DS from '../assets/LPL/DS.png'
import GM from '../assets/LPL/GM.png'
import JK from '../assets/LPL/JK.png'
import BLK from '../assets/LPL/BLK.png'
import CSG from '../assets/TNPL/CSG.png'
import ITT from '../assets/TNPL/ITT.png'
import LKK from '../assets/TNPL/LKK.png'
import SMP from '../assets/TNPL/SMP.png'
import NRK from '../assets/TNPL/NRK.png'
import TGC from '../assets/TNPL/TGC.png'
import DD from '../assets/TNPL/DD.png'
import SS from '../assets/TNPL/SS.png'
import WF from '../assets/TH/WF(2).png'
import TR from '../assets/TH/TR.png'
import SB from '../assets/TH/SB.png'
import BP from '../assets/TH/BP.png'
import NSC from '../assets/TH/NSC(2).png'
import OI from '../assets/TH/OI.png'
import MO from '../assets/TH/MO(2).png'
import LS from '../assets/TH/LS(2).png'
// import OMA from '../assets/OMG.png'


import { Link } from 'react-router-dom'

export default function Strap(props) {

  const Logos = {}
  const data = props.data;
  console.log("Data here",data)
  let League = data.series
  let Year = data.year

  if(League===undefined){
    League = "Indian Premier League"
    Year = "2024"
  }

  console.log("League",League)
  
   Logos["Indian Premier League"] = {
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

  Logos["Lanka Premier League"] = {
    'CS': CS,
    'JK': JK,
    'DS': DS,
    'GM': GM,
    'BLK': BLK,
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
 'DSG':DSG,
 'PR':PR,
 'JSK':JSK,
 'PC':PC,
 'MICT':MICT
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

const link = '/' + props.btn_link +'/' + data.uniqueId
console.log("link",link)

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
console.log("Time:",time)

if(time<12){
  time = time + ":00 am"
}

else{
  time = time -12 + ":00 pm"
}


 let index = data.uniqueId.indexOf('_')
const match_no = data.uniqueId.substring(index+1)

console.log("Prosps:",props)
var scorecard = false;

if(props.prev==="true") scorecard =true;
return (
    <>
    <div className=" flex items-center">
        <div className="mx-3">
            <div className="flex flex-col md:flex-row justify-center items-center">
            <img className="w-8 md:w-24 md:h-24 h-8"src={Logos[League][data.team1]} alt="" />
            <div className="font-mont font-bold md:text-3xl md:ml-4 text-sm">{data.team1}</div>
            </div>
        </div>
        <div className="mx-2 font-bold">VS</div>
        <div className="mx-3">
        <div className="flex flex-col md:flex-row justify-center items-center">
            <img className="w-8 md:w-24 md:h-24 h-8"src={Logos[League][data.team2]} alt="" />
            <div className="font-mont font-bold md:text-3xl md:ml-4 text-sm">{data.team2}</div>
            </div>
        </div>
        <div className="text-xs flex flex-col font-bold mx-4 md:text-base md:mx-8">
         <div>
         {day}{' '}{monthNames[monthIndex]}
         </div>
         <div>
          {time}
         </div>
        </div>
        <div className="mr-2">
        <Link to={link}>
            <div>
            <button className="my-4 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  {props.btn_des}
</button>




            </div>
</Link>
        </div>
    </div>
    </>
)
}