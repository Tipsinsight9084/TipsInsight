import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Upcoming(){

    const [upcoming, setUpcoming] = useState([]);
    let view = "Buy Now"

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllupcoming = async () => {
        try {
          const response = await fetch('https://cricket-prediction-66bh.onrender.com/upcomingmatches');
          const data = await response.json();
          setUpcoming(data); // // Assuming the backend returns an array of events
        } catch (error) {
          console.error('Error fetching all previous matches:', error);
        }
      };
  
      // Call the fetchAllEvents function
      fetchAllupcoming();
    }, []); 

    let upcoming_heading = "UPCOMING MATCHES"
    // console.log(previous)
    return(
        <>
        <Navbar />
        <Heading heading={upcoming_heading}/>
        {upcoming.map((upcoming) => ( 
                <Card prev="false" btn_link='buy' key={upcoming.uniqueId} btn_des={view} data={upcoming}/> 
      ))}
      <Footer/>
     
        </>
    )
    
    
}