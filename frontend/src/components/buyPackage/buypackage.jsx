import React from "react";
import LPL_package from '/LPL_package.jpg'
import TNPL_package from '/TNPL_package.jpg'
import {Link} from 'react-router-dom'

export default function Buypackage(props){

  let League = props.league
  let Year = props.year

  function redirectToWhatsApp() {
    // Phone number with country code
    const phoneNumber = "918445659152";
    // Default message (URL encoded)
    const defaultMessage = encodeURIComponent(`Hello there, I would like to talk to you about the package of ${League} ${Year}.`);
    // Construct WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  }

  return(
    <>
    <div className="mx-4">
      <div className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto font-mont"> 
      <img src={LPL_package} alt="" />
      </div>

      <div className="font-mont bg-black">
        League
      
       <button onClick={redirectToWhatsApp} className="my-4 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
Buy
</button>




       </div>
      </div></>
  )

 

return(
    <>
     <div> {/* Adjusted padding for smaller devices */}
 

 <div className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto font-mont"> {/* Centered and adjusted width */}
   <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
     <div className="text-center">
       <div className="font-mont font-semibold text-xl mt-2 md:text-3xl text-white"> {/* Adjusted font size */}
         {League} {Year}
       </div>
     </div>
     <div className="mt-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center ">
       <div className="font-bold flex flex-row items-center justify-between md:px-12 md:py-2 w-full rounded-md">
         <img src={LPL_package} alt="" />
       </div>
       <div className="font-mont font-bold text-sm md:text-base mt-0 md:mt-4"> {/* Adjusted font size */}
      Buy
       </div>
        
       <div>
       <button onClick={redirectToWhatsApp} className="my-4 md:my-8 font-mont font-semibold text-base md:text-xl rounded-3xl px-4 md:px-8 py-2 md:py-2 text-white bg-gradient-to-r from-customRed to-customBrown w-full md:w-auto hover:transform hover:scale-110 transition duration-300 ease-in-out">
Buy
</button>




       </div>

     </div>
   </div>
 </div>
</div>
    </>
)
}