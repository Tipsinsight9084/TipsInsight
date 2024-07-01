import Heading from "./Heading"
import { useEffect,useState } from "react";
import Card from "./card";
import NavBar from "./navbarr";
import Footer from './footer'
import LoadingAnimation from "./Loader/Loader";
import Whatsapp_floating from "./floating/Whatsapp_floating";
import Telegram_floating from "./floating/Telegram_floating";
import { useParams } from "react-router-dom";
import Sample from "./SamplePage/Sample";
export default function Previous(){

    var league = useParams();
    league = league.league
    console

    var details = {};
    details['Bigbash23'] = {
        'Tournament' : 'Big Bash League',
        'Year' : '2023-24',
        'heading' : 'Big Bash 2023'
    }

    details['IPL24'] = {
        'Tournament' : 'Indian Premier League',
       'Year' : '2024',
       'heading' : 'IPL 2024'
    }
    

    const [previous, setPrevious] = useState([]);
    let view = "View Prediction"
    

    useEffect(() => {
      // // Function to fetch all event data from the backend
      const fetchAllPrevious = async () => {
        try {
          const response = await fetch(`https://tips-insight-m7y6-backend.vercel.app/prevmatches/${league}`);
          // const response = await fetch('http://localhost:3000/prevmatches/');
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
        console.log(league)
      return (
        <LoadingAnimation/>
      );
      
    }

    if(league==="IPL24"){
      total = 74;
      tosspassed = 67
      matchpassed = 69;
    }

     else if(league==="SA24"){
      total = 34;
      tosspassed = 31
      matchpassed = 32;
    }

    else if(league==="WIvSA24"){
      total = 3;
      tosspassed = 2
      matchpassed = 3;
    }

    else if(league==="ENGvPAK24"){
      total = 4;
      tosspassed = 3
      matchpassed = 4;
    }

    else if(league==="WC23"){
      total = 48;
      tosspassed = 43
      matchpassed = 45
    }

    else if(league==="Bigbash23"){
      total = 44;
      tosspassed = 40
      matchpassed = 41
    }

    else if(league==="WC24"){
      total = 55;
      tosspassed = 51
      matchpassed = 53
    }

    else{

    var total = 0;
    var tosspassed = 0;
    var matchpassed = 0;

    previous.forEach(item => {
        total += 1;
    
        if (item.actualmatchWinner === item.matchWinner) {
            matchpassed += 1;
        }
    
        if (item.actualtossWinner === item.tossWinner) {
            tosspassed += 1;
        }
    });

    console.log(total,tosspassed,matchpassed)
    
   
  }
  

    let previous_heading = previous[0].series + " " + previous[0].year
    console.log("Previousss heading",previous_heading)
 
    if(previous_heading=="undefined undefined"){
      previous_heading = "IPL 2024"
    }
    // console.log(previous)
    return(
        <>
        <NavBar />
        <Heading heading={previous_heading}/>
        < Sample total = {total} tosspassed = {tosspassed} matchpassed = {matchpassed}/>
        {previous.map((previous) => ( 
                <Card prev="true" btn_link='prediction' key={previous.uniqueId} btn_des={view} data={previous} /> 
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