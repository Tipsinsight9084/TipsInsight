import React from 'react'

const bottomNav = () => {

    function redirectToWhatsApp() {
        // Phone number with country code
        const phoneNumber = "918445659152";
        // Default message (URL encoded)
        const defaultMessage = encodeURIComponent("Hello there, I would like to talk to you about Cricket Prediction.");
        // Construct WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
      }


  return (
    <div className='w-full text-center z-20 hover:border-customRed  bg-white h-[6vh] md:h-[10vh] my-auto text-white sticky border-2 border-gray-300 '>
    <div className='my-auto  leading-[6vh] md:leading-[10vh] text-xs md:text-xl hover:drop-shadow-2xl hover:cursor-pointer text-customRed md:text-black md:hover:text-customRed underline underline-offset-2 font-bold font-mont' 
    onClick={redirectToWhatsApp}>

      Contact Us for Cricket Toss & Match Prediction!!!
    </div>
    </div>
  )
}

export default bottomNav;
