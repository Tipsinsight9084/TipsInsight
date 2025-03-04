import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Card from './card';
import Heading from './Heading';
// import {Link from 'react-router-dom'
import Footer from './footer'
import HeroSection from './hero/hero';
import Strap from './strap';
import { Link } from 'react-router-dom';
import NavBar from './navbarr';
import Resultbar from './Resultbar';
import LoadingAnimation from './Loader/Loader';
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
  
  const [upcomingmatchTH,setUpcomingmatchTH] = useState(null)
  const [upcomingmatchKSCA,setUpcomingmatchKSCA] = useState(null)

  const [nextMatchKSCA,setNextMatchKSCA] = useState(null);

  
  const [previousmatchtnpl,setPreviousmatchtnpl] = useState(null)
  const [previousmatchTH,setPreviousmatchTH] = useState(null)
  const [previousmatchKSCA,setPreviousmatchKSCA] = useState(null)



  function compareDates(first, second) {
    console.log("first",first)
    const date1 = new Date(first.matchDate);
    const date2 = new Date(second.matchDate);
  
    if (date1 < date2) {
      return [first,second];
    } else if (date1 > date2) {
      return [second,first];
    } else {
      return [first,second];
  }
}

  console.log("st")
  const run = useState(null)


  useEffect(() => {
    async function fetchNextMatch() {
      // console.log("suraj")
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/nextmatch/KSCA24');
        // console.log("again")
        const matchData = await response.json();
        setNextMatchKSCA(matchData);
        console.log("check time here: ", matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchNextMatch();
  },[]);



  useEffect(() => {
    async function fetchPreviousMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/TH24');
        const matchData = await response.json();
        setPreviousmatchTH(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); 

  useEffect(() => {
    async function fetchPreviousMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/upcomingmatches/KSCA24');
        const matchData = await response.json();
        setUpcomingmatchKSCA(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); 

  useEffect(() => {
    async function fetchPreviousMatch() {
      try {
        const response = await fetch('https://tips-insight-m7y6-backend.vercel.app/prevmatches/KSCA24');
        const matchData = await response.json();
        setPreviousmatchKSCA(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); 

  let nextMatch ,upcomingmatch  // nextMatch = nextMatchtnpl;

  if(upcomingmatchKSCA){

    if(upcomingmatchKSCA.length<2){
    upcomingmatch = upcomingmatchKSCA[0]
    }

    else{ upcomingmatch = upcomingmatchKSCA[1];}
  }

  
  if(nextMatchKSCA){
 nextMatch = nextMatchKSCA
  }

  console.log("upcoming",upcomingmatch)

   
  let view = "view"

  return (
    <>
    <div className='parent-div'>

      <NavBar/>
      <div className='flex  justify-center'>
      <div className='mt-4 animate-combined bg-gradient-to-r from-customRed via-customBrown to-orange-500 bg-clip-text text-transparent text-2xl font-black mb-0 py-0'>
  { "Welcome to Tipsinsight" }
  </div>
  </div>
      <br></br>
      {/* <ResultBar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/> */}
      {/* < Resultbar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/> */}

      <FinalCarousel/>
      {/* <div className='mt-8 md:mt-1'></div> */}
      {/* Render next match data if available */}
      <div className='md:mt-[30vh]'>
      <Heading heading={next_heading} />
      {nextMatch && (
        <>
          <Countdown date= {nextMatch.matchDate} time={nextMatch.time}/>
          <Card prev="false" Year="2024" btn_link='buy' btn_des={buy} data={nextMatch} League="Indian Premier League" />
        </>
      )}



      {
        !nextMatch&& <LoadingAnimation/>
      }
      <Heading heading={upcoming_heading} />
     {upcomingmatch && (
        <>
      
      <Card prev="false" btn_link='buy' btn_des={buy} data={upcomingmatch} League="Indian Premier League" Year="2023"/>
      </>
  )
} 

 {
        !upcomingmatch && <LoadingAnimation/>
      }


<div className='flex justify-center'>
<Link to='/upcoming'>
  
<button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-6 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
  View more matches
</button>
</Link>
</div>  
<Heading heading={previous_heading}/>
{
  previousmatchKSCA && (
    <>
    
    <Card prev="true" btn_link = 'prediction' btn_des = {prediction} data={previousmatchKSCA[0]} League="Indian Premier League" Year="2024"/>
      </>
  )
}

{/* WHEN 1st match of TNPL is done */}
{
  previousmatchTH && (
    <>
    
    <Card prev="true" btn_link = 'prediction' btn_des = {prediction} data={previousmatchTH[0]} League="Indian Premier League" Year="2024"/>
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

 {/* {
  upcomingmatchlpl &&
  <Box Matches={upcomingmatchlpl} League="Lanka Premier League" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 } */}

{/* {
  upcomingmatchtnpl &&
  <Box Matches={upcomingmatchtnpl} League="Tamil Nadu Premier League" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 } */}

{
  upcomingmatchKSCA &&
  <Box Matches={upcomingmatchKSCA} League="Maharaja T20" Year='2024' State="Upcoming Matches" btn_link="buy" btn_des="Buy"/>

 }

{ previousmatchKSCA && 
  <Box Matches={previousmatchKSCA} League="Maharaja T20" Year='2024' State="Previous Matches" btn_link="prediction" btn_des="View"/>
}

{/* WHEN 1st match of TNPL is done */}

{ previousmatchTH && 
  <Box Matches={previousmatchTH} League="The Hundred Mens" Year='2024' State="Previous Matches" btn_link="prediction" btn_des="View"/>
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
