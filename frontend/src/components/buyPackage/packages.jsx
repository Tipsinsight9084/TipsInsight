import React from "react";
import Buypackage from "./buypackage";
import Navbar from '../navbarr.jsx'
import Heading from "../Heading";
import Footer from "../footer.jsx";


export default function Packages(){
return (
    <>
    <Navbar/>
    <Heading heading="Buy Packages"/>
    {/* <Buypackage league="Lanka Premier League" year="2024" /> */}
    <Buypackage league="Tamil Nadu Premier League" year="2024" />
    <div className='md:mt-10 mt-16'>
          <p className='w-[80%] md:mt-10 m-auto text-sm md:text-xl text-center font-semibold'>We strictly secure your identity with each and every detail like your Name, Contact details and all other details which we have.</p>

          <br></br>
          {/* <br></br> */}

          <p className='w-[80%]  md:mt-10 m-auto text-sm md:text-xl text-center font-semibold'>Client and their privacy is our first priority.</p>

          <br></br>
          {/* <br></br> */}

          <p className='w-[80%]  md:mt-10 m-auto text-sm md:text-xl text-center font-semibold' >DISCLAIMER : We only provide accurate Sports and Market predictions based on predictive science. We do not encourage Sports betting as well as predictions to be viewed as cricket betting tips or football betting tips on this website. We never misguide anyone or either approach people to use in inappropriate manner.</p>
         </div>

<br></br>
<br></br>
<br></br>
<br></br>
         <div className='w-[90%] m-auto text-center my-10'>
 
          <ul className='list-inside list-disc '>
            <li>These services should just be objective above 18+ Users.</li>
            <li>The ads + landing page should just promote day by day Fantasy Sports.</li>
            <li>The promotion can target India just and exclude the province of Telangana, Orissa, Assam, Sikkim and Nagaland because of nearby laws.</li>
          </ul>
         </div>

       
 
    <Footer/>
    </>
)
}