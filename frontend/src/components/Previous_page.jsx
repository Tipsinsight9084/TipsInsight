import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from './footer'
import LoadingAnimation from "./Loader/Loader";
import Whatsapp_floating from "./floating/Whatsapp_floating";
import Telegram_floating from "./floating/Telegram_floating";
import { Link } from 'react-router-dom'
import Resultbar from "./Resultbar";
import Sample from "./SamplePage/Sample";
export default function Previousmatches(){

    const [previousipl, setPreviousipl] = useState([]);
    const [previousbb , setPreviousbb] = useState([]);
    const [previouslpl , setPreviouslpl] = useState([]);
    const [previoustnpl , setPrevioustnpl] = useState([]);
    const [previousTH, setPreviousTH] = useState([])
    const [previouswc23 , setPreviouswc23] = useState([]);
    const [previoussa , setPrevioussa] = useState([]);
    const [previouswivssa , setPreviouswivssa] = useState([]);
    const [previousengvspak , setPreviousengvspak] = useState([]);
    const [previouswc24,setPreviouswc24] = useState([])
    const [previousKSCA,setPreviousKSCA] = useState([])

    let view = "View Prediction"

    console.log("Previous",previouswivssa)

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/IPL24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviousipl(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/WC24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviouswc24(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/WC23');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviouswc23(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/SA24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPrevioussa(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/ENGvPAK24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviousengvspak(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/WIvSA24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviouswivssa(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/Bigbash23');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviousbb(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/LPL24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviouslpl(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    
    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/TNPL24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPrevioustnpl(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/TH24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviousTH(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/KSCA24');
          // const response = await fetch('http://localhost:3000/prevmatches/');
          const data = await response.json();
          setPreviousKSCA(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    if (previousipl.length==0 && previousbb.length==0) {
      return (
        <LoadingAnimation/>
      );
      
    }

    var totalKSCA24 = 0;
    var tosspassedKSCA24 = 0;
    var matchpassedKSCA24 = 0;

    previousKSCA.forEach(item => {
      totalKSCA24 += 1;
  
      if (item.actualmatchWinner === item.matchWinner) {
          matchpassedKSCA24 += 1;
      }
  
      if (item.actualtossWinner === item.tossWinner) {
          tosspassedKSCA24 += 1;
      }
  });

    let previous_heading_ipl = "IPL 2024"
    let previous_heading_bb = "Big Bash 2023"
    let previous_heading_wc23 = "Cricket World Cup 2023"
    let previous_heading_sa24 = "SA T20 League 2024"
    let previous_heading_wivssa = "WI vs SA T20 2024"
    let previous_heading_engvpak = "ENG vs PAK T20 2024"
    let previous_heading_wc24 = "T2O World Cup 2024"    
    let previous_heading_lpl24 = "Lanka Premier League 2024"
    let previous_heading_tnpl24 = "Tamil Nadu Premier League 2024"
    let previous_heading_TH24 = "The Hundred Mens 2024"
    let previous_heading_KSCA24 = "Maharaja T20 2024"
    return(
        <>
        <NavBar />

        <Heading heading={previous_heading_KSCA24}/>
        
        <Resultbar total={totalKSCA24} tosspassed={tosspassedKSCA24} matchpassed={matchpassedKSCA24}/>
{previousKSCA.slice(0,3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/KSCA24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="no-underline my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

        <Heading heading={previous_heading_TH24}/>
        
        <Resultbar total={34} tosspassed={33} matchpassed={32}/>
{previousTH.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/TH24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="no-underline my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

{/* WHen 1st match of TNPL is done */}
  <Heading heading={previous_heading_tnpl24}/>
        
        <Resultbar total={32} tosspassed={32} matchpassed={32}/>
{previoustnpl.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/TNPL24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="no-underline my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading={previous_heading_lpl24}/>
        
        <Resultbar total={24} tosspassed={24} matchpassed={24}/>
{previouslpl.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/LPL24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="no-underline my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

        <Heading heading={previous_heading_wc24}/>
        {/* < Sample total = {totalipl24} tosspassed = {tosspassedipl24} matchpassed = {matchpassedipl24}/> */}
        <Resultbar total={55} tosspassed={51} matchpassed={53}/>
{previouswc24.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/WC24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading={previous_heading_ipl}/>
        < Resultbar total = {74} tosspassed = {67} matchpassed = {69}/>

{previousipl.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/IPL24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading={previous_heading_wivssa}/>
        < Resultbar total = {3} tosspassed = {2} matchpassed = {3}/>

{previouswivssa.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item}/>
      ))}

<Link to='/previous/WIvSA24' className="no-underline">
<div className="flex justify-center items-center">
  <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

      <Heading heading = {previous_heading_engvpak}/>
      < Resultbar total = {4} tosspassed = {3} matchpassed = {4}/>
      
      {previousengvspak.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item}/>
      ))}
     

<Link to='/previous/ENGvPAK24' className="no-underline">
<div className="flex justify-center items-center ">
  <button className="my-4 md:my-8 font-mont  font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading = {previous_heading_sa24}/>
      < Resultbar total = {34} tosspassed = {31} matchpassed = {32}/>
      
      {previoussa.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item}/>
      ))}
     

<Link to='/previous/SA24' className="no-underline">
<div className="flex justify-center items-center ">
  <button className="my-4 md:my-8 font-mont  font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading = {previous_heading_bb}/>
      < Resultbar total = {44} tosspassed = {40} matchpassed = {41}/>
      
      {previousbb.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item}/>
      ))}
     

<Link to='/previous/Bigbash23' className="no-underline">
<div className="flex justify-center items-center ">
  <button className="my-4 md:my-8 font-mont  font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

  <Heading heading = {previous_heading_wc23}/>
      < Resultbar total = {48} tosspassed = {43} matchpassed = {45}/>
      
      {previouswc23.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item}/>
      ))}
     

<Link to='/previous/WC23' className="no-underline">
<div className="flex justify-center items-center ">
  <button className="my-4 md:my-8 font-mont  font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>
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
    )
    
    
}