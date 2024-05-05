import React, {useState} from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";


const bottomNav = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleHide = () => {
        setIsVisible(false); // Set visibility to false when hide button is clicked
      };

    function redirectToWhatsApp() {
        // Phone number with country code
        const phoneNumber = "918445659152";
        // Default message (URL encoded)
        const defaultMessage = encodeURIComponent("Hello there, I would like to ask you some question about Cricket Prediction.");
        // Construct WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
      }


  return (
    <>
    {isVisible && ( // Render component only if isVisible is true
      <div className='w-full text-center z-20  bg-white drop-shadow-lg h-[6vh] md:h-[10vh] my-auto text-white sticky border-2 border-gray-300 flex justify-between rounded-full'>
        <div className='uppercase mx-2 w-[90%] my-auto leading-[3vh] md:leading-[10vh] text-xs md:text-xl hover:drop-shadow-2xl hover:cursor-pointer text-customRed md:text-black md:hover:text-customRed underline underline-offset-2 font-bold font-mont' onClick={redirectToWhatsApp}>
          Whatsapp message Here: 
        </div>
        {/* <img src={<FaWhatsapp />}></img> */}
        {/* <FaWhatsapp /> */}
        <div className='items-center my-auto align-center'>
        <RiWhatsappFill  className=" text-[#075E54] md:text-black md:hover:text-customRed cursor-pointer" onClick={redirectToWhatsApp} style={{ fontSize: 'clamp(25px, 5vw, 40px)' }} />
        </div>
        <button className="hover:drop-shadow-2xl hover:cursor-pointer cross-icon w-[10%] font-bold text-black mx-2 text-customRed md:text-black md:hover:text-customRed" onClick={handleHide}>X</button>
      </div>
    )}
  </>
  )
}

export default bottomNav;
