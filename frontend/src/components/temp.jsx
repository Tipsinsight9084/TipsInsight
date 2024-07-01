import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from './footer'
import LoadingAnimation from "./Loader/Loader";
import Whatsapp_floating from "./floating/Whatsapp_floating";
import Telegram_floating from "./floating/Telegram_floating";
import { Link } from 'react-router-dom'
export default function Previousmatches(){

    const [previousipl, setPreviousipl] = useState([]);
    const [previousbb , setPreviousbb] = useState([]);
    let view = "View Prediction"

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

    if (previousipl.length==0 && previousbb.length==0) {
      return (
        <LoadingAnimation/>
      );
      
    }
  

    let previous_heading_ipl = "IPL 2024"
    let previous_heading_bb = "Big Bash 2023"
    // console.log(previous)
    return(
        <>
        <NavBar />
        <Heading heading={previous_heading_ipl}/>
        {/* {previous.map((previous) => ( 
                <Card prev="true" btn_link='prediction' key={previous.uniqueId} btn_des={view} data={previous} League="Indian Premier League" Year="2023"/> 
      ))} */}

{previousipl.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Indian Premier League" Year = "2023"/>
      ))}

<Link to='/previous/IPL24'>
<div className="flex justify-center items-center">
  <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>

      <Heading heading = {previous_heading_bb}/>
      {previousbb.slice(0, 3).map((item) => (
        <Card prev="true" btn_link = 'prediction' key={item.uniqueId} btn_des={view} data={item} League = "Big Bash League" Year = "2023-24"/>
      ))}

<Link to='/previous/Bigbash23'>
<div className="flex justify-center items-center ">
  <button className="my-4 md:my-8 font-mont  font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-auto md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
    View more matches
  </button>
  </div>
  </Link>
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
    )
    
    
}