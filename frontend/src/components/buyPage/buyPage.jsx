import React from 'react'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import './buyPage.css'

function BuyPage() {
  return (
        <div className='bg-[#F2F2F2] m-0 p-0 overscroll-x-none overflow-x-hidden'> {/* Adjusted padding for smaller devices */}


<nav className=" bg-gradient-to-r from-customRed to-customBrown py-6 fixed top-0 border-red-600 md:w-[100%] w-[80%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center text-white text-4xl font-bold">
          {/* <Link to="/" className="text-white text-lg font-bold">My Website</Link> */}
          AKC.
        </div>
        {/* <div className="flex space-x-8">
          <Link to="/buy" className="text-gray-300 hover:text-white">Buy</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/prediction" className="text-gray-300 hover:text-white">Prediction</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div> */}
      </div>
    </nav>
    {/* <div>
      <div className='w-full bg-white h-6 pt-40'> </div>
    </div> */}
  <div className='overscroll-x-none overflow-x-hidden'>
   
   <div className="md:w-full mx-5 md:w-4/5 lg:w-4/5 xl:w-8/12 md:mx-auto pt-40 md:pt-60"> {/* Centered and adjusted width */}
     <div className=" rounded-3xl bg-gradient-to-r from-customBrown via-customRed to-customBrown p-1.5">
      
       <div className="text-center my-5">
         <div className="font-mont font-bold md:text-2xl text-sm md:text-3xl text-white "> {/* Adjusted font size */}
           Indian Premier League 2024
         </div>
         <div className="font-mont md:text-lg text-sm md:text-2xl font-semibold text-white"> {/* Adjusted font size */}
           24<sup>th</sup> Match
         </div>
       </div>
       <div className=" md:mt-6 w-full bg-white p-4 border-x-[0px]  rounded-b-3xl flex flex-col items-center">
         <div className="md:font-bold flex  flex-row md:flex-row items-center justify-between px-0 md:px-0 py-4 md:py-8 w-full ">
           {/* <div className="md:mx-8 flex flex-row justify-center items-center w-full md:w-auto md:rounded-md"> Adjusted margin and width */}
             {/* <div className=" flex text-lg md:text-2xl w-full flex justify-between items-center"> */}
              <div className='basis-3/7 flex flex-col items-center  m-auto'>
           <img src={team1} alt="Team 1 image" className="md:w-20 w-12  h-auto" /> {/* Adjusted image size */}
               <div className="md:px-4 m-auto md:text-2xl text-xs font-bold text-center">Chennai Super Kings</div>
               </div>

               <div className=" basis-1/7 px-4 md:text-3xl text-sm font-bold">V/S</div>
               <div className='basis-3/7 flex flex-col-reverse items-center m-auto'>
               <div className="md:px-4 m-auto md:text-2xl text-xs font-bold text-center">Mumbai Indians</div>

               <img src={team2} alt="Team 2 image" className="w-20 md:w-32 h-auto md:w-20 w-12  h-auto"/> {/* Adjusted image size */}
               </div>
             {/* </div> */}
           {/* </div> */}
         </div>
         {/* <div className='divide-y'></div> */}
         <div className="font-mont font-semibold text-xs md:text-5xl md:text-base mt-2 divide-y text-center"> {/* Adjusted font size */}
           Wednesday, 26th April, 06:00 PM
        
       </div>
     </div>
   </div>

   </div>
   <div className='divide-y md:py-28 py-4'> 

         <div className='w-full divide-y md:pt-2'>

          <div className='flex flex-row items-center md:w-[75%] w-[80%] m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl'> 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
            Toss Prediction :
            </div>
          <button className=" basis-1/2 my-4 md:mx-4 md:my-8 font-mont font-bold mx-4 text-sm md:text-base md:text-xl rounded-3xl px-4 md:px-8 py-1 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto hover:scale-105  * before:ease border text-white shadow-3xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-3 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-red-200 hover:before:-translate-x-80">
Buy Now
</button>
          </div>
          </div>
          <div className='w-full divide-y pt-2'>
            
          <div className='flex flex-row items-center  md:w-[75%] w-[80%]  m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl'> 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
              Match Prediction :
            </div>
          <button className=" basis-1/2 my-4 md:mx-4 md:my-8 font-mont font-bold mx-4 text-sm md:text-base md:text-xl rounded-3xl px-4 md:px-8 py-1 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto hover:scale-105  * before:ease border text-white shadow-3xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-3 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-red-200 hover:before:-translate-x-80">
Buy Now
</button>
          </div>
          </div>
          <div className='w-full divide-y pt-2'>
            
          <div className='flex flex-row items-center  md:w-[75%] w-[80%]  m-auto bg-white my-3 border-4 border-customBrown/20 rounded-xl' > 

            <div className='basis-1/2 md:mx-10 md:text-3xl text-sm ml-2 text-center font-semibold'>
              Overall Prediction :
            </div>
          <button className=" basis-1/2 my-4 md:mx-4 md:my-8 font-mont font-bold mx-4 text-sm md:text-base md:text-xl rounded-3xl px-4 md:px-8 py-1 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto hover:scale-105  * before:ease border text-white shadow-3xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-3 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-1000 hover:shadow-red-200 hover:before:-translate-x-80">
Buy Now
</button>
          </div>
          </div>
         {/* <button className="my-4 md:my-8 font-mont font-bold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customBrown to-customRed w-full md:w-auto ">
Buy Now
</button> */}



         </div>

         <div className='md:mt-10 mt-5'>
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

         <footer className="footer p-10 bg-base-200 text-base-content flex md:flex-row flex-col items-center md:my-0 my-4 bg-white text-sm md:text-2xl">
  <aside className='basis-2/4 md:my-0 my-10'>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACP. Company<br/>Providing reliable prediction.</p>
  </aside> 
  {/* <nav className=' basis-1/6 flex flex-col'>
    <h6 className="footer-title font-semibold">Services</h6> 
    <a className="link link-hover">matc</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>  */}
  <div className='flex flex-row items-center justify-around w-[80%]'>
  <nav className='basis-1/4 flex flex-col md:my-0 my-4 '>
    <h6 className="footer-title font-semibold">ACP. Company</h6> 
    <a className="link hover:link">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav  className='basis-1/4 flex flex-col md:my-0 my-4'>
    <h6 className="footer-title font-semibold">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
</div>
 </div>
  )
}

export default BuyPage
