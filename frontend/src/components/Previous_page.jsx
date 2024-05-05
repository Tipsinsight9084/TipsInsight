import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from './footer'
import LoadingAnimation from "./Loader/Loader";

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
        </>
    )
    
    
}