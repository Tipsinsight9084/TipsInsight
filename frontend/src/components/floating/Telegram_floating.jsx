import React from 'react'
import { FaTelegram } from "react-icons/fa";

const Telegram_floating = () => {

    function redirectToTelegram() {
        // Telegram username or phone number (include the country code if using a phone number)
        const username = "tips_insight";
        // Default message
        const defaultMessage = encodeURIComponent("Hello there, I would like to ask you some question about Cricket Prediction.");
        // Construct Telegram URL
        const telegramUrl = `https://t.me/${username}`;
        // Redirect to Telegram
        window.open(telegramUrl, '_blank');
    }

  return (
    <div className='flex flex-row-reverse bg-transparent bg-transparent '>
    <div className='w-fit h-auto p-2 text-center z-20  bg-[#0088cc] drop-shadow-lg  my-auto text-white sticky border-2 border-gray-300 flex justify-between rounded-full'>
     <div className='items-center my-auto align-center'>
     <FaTelegram  className=" text-white cursor-pointer"  onClick={redirectToTelegram} style={{ fontSize: 'clamp(25px, 5vw, 40px)' }} />
     </div>
     {/* <button className="hover:drop-shadow-2xl hover:cursor-pointer cross-icon w-[10%] font-bold text-black mx-2 text-customRed md:text-black md:hover:text-customRed">X</button> */}
   </div>
 </div>
  )
}

export default Telegram_floating
