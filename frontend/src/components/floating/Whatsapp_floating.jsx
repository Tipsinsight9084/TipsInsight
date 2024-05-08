import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";

const Whatsapp_floating = () => {

    function redirectToWhatsApp() {
        // Phone number with country code
        const phoneNumber = "918445659152";
        // Default message (URL encoded)
        const defaultMessage = encodeURIComponent("Hello there, I would like to ask you some question about Cricket Prediction.");
        // Construct WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
        // Redirect to WhatsApp
        // window.location.href = whatsappUrl;
        window.open(whatsappUrl, '_blank');
      }


      
  return (
    <div className='flex flex-row-reverse bg-transparent bg-transparent '>
       <div className='w-fit h-auto p-2 text-center z-20  bg-[#075E54] drop-shadow-lg  my-auto text-white sticky border-2 border-gray-300 flex justify-between rounded-full'>
        <div className='items-center my-auto align-center'>
        <RiWhatsappFill  className=" text-white cursor-pointer"  onClick={redirectToWhatsApp} style={{ fontSize: 'clamp(25px, 5vw, 40px)' }} />
        </div>
        {/* <button className="hover:drop-shadow-2xl hover:cursor-pointer cross-icon w-[10%] font-bold text-black mx-2 text-customRed md:text-black md:hover:text-customRed">X</button> */}
      </div>
    </div>
  )
}

export default Whatsapp_floating
