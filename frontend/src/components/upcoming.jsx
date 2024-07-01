import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from "./footer";
import LoadingAnimation from "./Loader/Loader";
import Whatsapp_floating from "./floating/Whatsapp_floating";
import Telegram_floating from "./floating/Telegram_floating";

export default function Upcoming(){

    const [upcoming, setUpcoming] = useState([]);
    let view = "Buy Now"

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllupcoming = async () => {
        try {
          const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/upcomingmatches/LPL24');
          const data = await response.json();
          setUpcoming(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllupcoming();
    }, []);
    
    // if (upcoming.length===0) {
    //   return (
    //     <LoadingAnimation/>
    //   );
      
    // }
  

    let upcoming_heading = "UPCOMING MATCHES"
    // console.log(previous)

    // return (
    //   <>
    //   <NavBar/>
    //   <Heading heading={"Matches will be available soon"}/>
    //   </>
    // )
    return(
        <>
        <NavBar />
        <Heading heading={upcoming_heading}/>
        {upcoming.map((upcoming) => ( 
                <Card prev="false" btn_link='buy' key={upcoming.uniqueId} btn_des={view} data={upcoming} League="Indian Premier League" Year="2024"/> 
      ))}
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