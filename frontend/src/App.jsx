import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Prediction_Page from './components/Prediction';
import Home_Page from './components/Home';
import Create from './components/create';
import BuyPage from './components/buyPage/buyPage';
import {SpeedInsights} from '@vercel/speed-insights/next'

import Previous from './components/Previous_page';
import AboutUs from './components/aboutUs/aboutUs';
import ContactUs from './components/contactUs/contactUs'
import HeroSection from './components/hero/hero';
// import ContactPage from './components/contactUs/contactUs';
import Upcoming from './components/upcoming'
import FinalCarousel from './components/hero/finalCarousel';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/new" element={<New />} /> */}
        {/* <Route path="/" element={<Home_Page />} /> */}
        {/* <Route path="/" element={<Home_Page/>} /> */}
        {/* <Route path="/" element={<BuyPage/>} /> */}
        {/* <Route path="/" element={<AboutUs/>} /> */}
        {/* <Route path="/" element={<ContactPage/>} /> */}
        {/* <Route path="/" element={<HeroSection/>} /> */}
        <Route path="/prediction" element={<Prediction_Page />} />
            {/* <Route path="/" element={<HeroSection/>} /> */}
        {/* <Route path="/" element={<FinalCarousel/>} /> */}
        <Route path="/" element={<Home_Page/>} />
        <Route path="/prediction/:uniqueId" element={<Prediction_Page />} />
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/previousmatches' element={<Previous/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/upcoming' element={<Upcoming/>}></Route>
        <Route path='/buy/:uniqueId' element = {<BuyPage/>}></Route>
      </Routes>
      {/* <div className="hi">HI</div> */}
      <SpeedInsights/>
    </>
  );
}

export default App;
