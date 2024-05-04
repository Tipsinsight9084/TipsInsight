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
// import KKR from '../assets/KKR.jpeg'
// import './card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

  const data = props.data;
  const logos = {
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

  const link = '/' + props.btn_link +'/' + data.uniqueId
  console.log("link",link)

  const date = new Date(data.matchDate);
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

  console.log("Prosps:",props)
  var scorecard = false;

  if(props.prev==="true") scorecard =true;
 

  return (
    <div> {/* Adjusted padding for smaller devices */}
   
      <div className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto"> {/* Centered and adjusted width */}
        <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
          <div className="text-center">
            <div className="font-mont font-extrabold text-xl mt-2 md:text-3xl text-white"> {/* Adjusted font size */}
              Indian Premiere League 2024
            </div>
            <div className="font-mont text-white text-lg my-0 md:text-2xl font-semibold"> {/* Adjusted font size */}
              {match_no}th Match
            </div>
          </div>
          <div className="mt-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center">
            <div className="font-bold flex flex-row items-center justify-between px-4 md:px-12 py-4 md:py-2 w-full rounded-md">
              <div className="flex flex-col justify-around md:pt-4 w-72 md:flex-row items-center">
                <img className="w-auto md:w-auto md:h-32 h-16"src={logos[data.team1]} alt="" />
                <div className='flex flex-col justify-center items-center'>
                <div className="font-mont font-bold md:text-3xl">{data.team1}</div>
               {scorecard && <div className="flex flex-col items-center font-mont font-semibold  text-sm md:text-md">
                  <span>{data.team1Run + '-' + data.team1Wicket}</span>
                  <span>{'(' + data.team1Over + ')'}</span>
                </div>
}
              </div>
              </div>

              <div className="font-mont font-bold text-2xl mx-2 md:mx-6">vs</div>

              <div className="flex flex-col-reverse justify-center md:pt-4 w-72 md:flex-row items-center">
                <div className='flex flex-col justify-around items-center'>
                <div className="font-mont font-bold md:text-3xl">{data.team2}</div>
                {scorecard && <div className="flex flex-col items-center font-mont font-semibold text-sm md:text-md">
                  <span>{data.team2Run + '-' + data.team2Wicket}</span>
                  <span>{'(' + data.team2Over + ')'}</span>
                </div>
} 
              </div>
                <img className="w-auto md:w-auto md:h-32 h-16"src={logos[data.team2]} alt="" />
              </div>


            </div>
            {scorecard && <div className="font-mont font-bold text-sm md:text-base mt-2 md:mt-4">
              {data.highlight}
            </div>
}
            <div className="font-mont font-extrabold text-sm md:text-base mt-2 md:mt-4"> {/* Adjusted font size */}
            {weekday}, {day}{' '}{monthNames[monthIndex]}, {time +":30"+ " PM"}
            </div>
              <Link to={link}>
            <div>
            <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  {props.btn_des}
</button>




            </div>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


