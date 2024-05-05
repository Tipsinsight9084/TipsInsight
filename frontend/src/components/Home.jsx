import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Card from './card';
import Heading from './Heading';
import {Link} from 'react-router-dom'
import Footer from './footer'
import HeroSection from './hero/hero';
import NavBar from './navbarr';
import FinalCarousel from './hero/finalCarousel';
import BottomNav from './Bottom/bottomNav';
import './home.css'
import Countdown from './countdown/countdown';

function Home_Page() {
  const next_heading = "Next Match";
  const upcoming_heading = "Upcoming Match";
  const previous_heading = "Previous Match"
  const buy = "Buy Now";
  const prediction = "View Prediction"
  const [nextMatch, setNextMatch] = useState(null); // State to hold next match
  const [upcomingmatch,setUpcomingmatch] = useState(null)
  const [previousmatch,setPreviousmatch] = useState(null)
  console.log("st")
  const run = useState(null)

  useEffect(() => {
    async function fetchNextMatch() {
      // console.log("suraj")
      try {
        const response = await fetch('https://tipsinsight.onrender.com/nextmatch');
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
        const response = await fetch('https://tipsinsight.onrender.com/upcomingmatches');
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
        const response = await fetch('https://tipsinsight.onrender.com/prevmatches');
        const matchData = await response.json();
        setPreviousmatch(matchData);
      } catch (error) {
        console.error('Error fetching next match:', error);
      }
    }

    fetchPreviousMatch();
  }, []); // Empty dependency array, runs once on component mount

  console.log(nextMatch)
  console.log(upcomingmatch)
  console.log(previousmatch)

  return (
    <>
    <div className='parent-div'>

      <NavBar/>
      <br></br>
      <FinalCarousel/>
      {/* <div className='mt-8 md:mt-1'></div> */}
      {/* Render next match data if available */}
      <div className='md:mt-[30vh]'>
      {nextMatch && (
        <>
         
          <Heading heading={next_heading} />
          <Countdown date= {nextMatch.matchDate} time={nextMatch.time}/>
          <Card prev="false" btn_link='buy' btn_des={buy} data={nextMatch} />
        </>
      )}
      
      {upcomingmatch && (
        <>
      <Heading heading={upcoming_heading} />
      <Card prev="false" btn_link='buy' btn_des={buy} data={upcomingmatch[1]}/>
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
    <Card prev="true" btn_link = 'prediction' btn_des = {prediction} data={previousmatch[0]} />
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

</div>

{/* <div className='absolute fixed h-4 w-full'> */}
{/* </div> */}

{/* <div className='border-2 border-black bg-customgray'>
<Footer/>
</div> */}

<Footer/>
<div className='md:h-[10vh] h-[6vh]'></div>
<div className='bottom-nav-parent w-full  flex justify-center'>
<div className='bottom-nav w-[80%] mb-3 rounded-full border-[0px] bg-gradient-to-r00 bg-white from-customRed to-customBrown'>
<BottomNav/>
</div>

</div>
</div>
         
    </>
  );
}

export default Home_Page;
