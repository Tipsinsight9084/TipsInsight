import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from './footer'
import LoadingAnimation from "./Loader/Loader";
import Whatsapp_floating from "./floating/Whatsapp_floating";
import Telegram_floating from "./floating/Telegram_floating";
export default function Previous(){

    const [previous, setPrevious] = useState([]);
    let view = "View Prediction"

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch('https://tipsinsight.onrender.com/prevmatches');
          const data = await response.json();
          setPrevious(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllPrevious();
    }, []); 

    if (previous.length==0) {
      return (
        <LoadingAnimation/>
      );
      
    }
  

    let previous_heading = "Previous Matches"
    // console.log(previous)
    return(
        <>
        <NavBar />
        <Heading heading={previous_heading}/>
        {previous.map((previous) => ( 
                <Card prev="true" btn_link='prediction' key={previous.uniqueId} btn_des={view} data={previous}/> 
      ))}
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