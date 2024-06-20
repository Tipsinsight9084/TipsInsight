import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Card from './card';
import Heading from './Heading';
import {Link} from 'react-router-dom'
import Footer from './footer'
import HeroSection from './hero/hero';
import Strap from './strap';
import NavBar from './navbarr';
import Resultbar from './Resultbar';
import FinalCarousel from './hero/finalCarousel';
import BottomNav from './Bottom/bottomNav';
import './home.css'
import Countdown from './countdown/countdown';
import Whatsapp_floating from './floating/Whatsapp_floating';
import Telegram_floating from './floating/Telegram_floating';
import Sample from './SamplePage/Sample';
import { Analytics } from "@vercel/analytics/react"
import Box from '../box';

function Home_Page() {
  const next_heading = "Next Match";
  const upcoming_heading = "Upcoming Match";
  const previous_heading = "Previous Match"
  const buy = "Buy Now";
  const prediction = "View Prediction"
  const [nextMatch, setNextMatch] = useState(null); // State to hold next match
  const [upcomingmatch,setUpcomingmatch] = useState(null)
  const [previousmatchbb,setPreviousmatchbb] = useState(null)
  const [previousmatch,setPreviousmatch] = useState(null)
  console.log("st")
  const run = useState(null)

  useEffect(() => {
    async function fetchNextMatch() {
      // console.log("suraj")
      try {
        const response = await fetch('https://tipsinsight.onrender.com/nextmatch/');
        // console.log("again")
        const matchData = await response.json();
        setNextMatch(matchData);
        console.log("check time here: ", matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchNextMatch();
  },[]); // Empty dependency array, runs once on component mount

  useEffect(() => {
    async function fetchupcomingMatch() {
      try {
        const response = await fetch('https://tipsinsight.onrender.com/upcomingmatches/WC24');
        const matchData = await response.json();
        setUpcomingmatch(matchData);
      } catch (error) {
        console.error('Error fetching upcoming match:', error);
      }
    }

    fetchupcomingMatch();
  }, []); // 

  useEffect(() => {
    async function fetchPreviousMatch() {
      try {
        const response = await fetch('https://tipsinsight.onrender.com/prevmatches/WC24');
        const matchData = await response.json();
        setPreviousmatch(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); // Empty dependency array, runs once on component mount

  

  console.log("next match: ", nextMatch)
  console.log(upcomingmatch)
  console.log(previousmatch)
  console.log(previousmatchbb)

    var total = 207;
    var tosspassed = 186;
    var matchpassed = 194;

  if(previousmatch) 
     {previousmatch.forEach(item => {
        total += 1;
    
        if (item.actualmatchWinner === item.matchWinner) {
            matchpassed += 1;
        }
    
        if (item.actualtossWinner === item.tossWinner) {
            tosspassed += 1;
        }
    });
  }

  let view = "view"



  return (
    <>
    <div className='parent-div'>

      <NavBar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/>
      <br></br>
      {/* <ResultBar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/> */}
      {/* < Resultbar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/> */}

      <FinalCarousel/>
      {/* <div className='mt-8 md:mt-1'></div> */}
      {/* Render next match data if available */}
      <div className='md:mt-[30vh]'>
      {nextMatch && (
        <>
         
          <Heading heading={next_heading} />
          <Countdown date= {nextMatch.matchDate} time={nextMatch.time}/>
          <Card prev="false" Year="2024" btn_link='buy' btn_des={buy} data={nextMatch} League="Indian Premier League" />
        </>
      )}
      
     {upcomingmatch && (
        <>
      <Heading heading={upcoming_heading} />
      <Card prev="false" btn_link='buy' btn_des={buy} data={upcomingmatch[1]} League="Indian Premier League" Year="2023"/>
      </>
  )
}
<div className='flex justify-center'>
<Link to='/upcoming'>
  
<button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  View more matches
</button>
</Link>
</div> 

{
  previousmatch && (
    <>
    <Heading heading={previous_heading}/>
    <Card prev="true" btn_link = 'prediction' btn_des = {prediction} data={previousmatch[0]} League="Indian Premier League" Year="2024"/>
      </>
  )
}

<div className="flex justify-center">

<Link to='/previousmatches'>
<button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  View more matches
</button>
</Link>
</div>

 {
  upcomingmatch &&
  <Box Matches={upcomingmatch} League="T20 World Cup" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 }

{ previousmatch && 
  <Box Matches={previousmatch} League="T20 World Cup" Year='2024' State="Previous Matches" btn_link="prediction" btn_des="View"/>
}

</div>

{/* <div className='absolute fixed h-4 w-full'> */}
{/* </div> */}

{/* <div className='border-2 border-black bg-customgray'>
<Footer/>
</div> */}

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


{/* <div className='md:h-[10vh] h-[6vh]'></div> */}
<div className='bottom-nav-parent   flex justify-center'>
<div className='bottom-nav w-[80%] mb-3 rounded-full border-[0px] bg-gradient-to-r00 bg-white from-customRed to-customBrown'>
<BottomNav/>
</div>

</div>
</div>
         
    </>
  );
}

export default Home_Page;
