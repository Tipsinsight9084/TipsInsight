import React, {useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx';
const finalCarousel = () => {

    const slides = [
        {
            url: './p1.png'
        },
        {
            url: './p2.png'
        }
        // ,
        // {
        //     url: './p4.png'
        // }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        console.log(currentIndex);
    }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
        console.log(currentIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
        console.log(currentIndex);
    };
  return (
    <div>
      
      <div className='max-w-[1400px] md:w-auto h-[35vh] md:h-[60vh]  w-full m-auto py-6 px-4 relative group' >

        <div
        style= {{ backgroundImage: `url(${slides[currentIndex].url})`}}
        className=' w-full md:h-[80vh] h-full rounded-2xl bg-center bg-cover duration-500'></div>
     
     <div className=' group-hover:block absolute top-[35%] md:top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 b-black/20 text-white cursor-pointer'>

     <BsChevronCompactLeft onClick={prevSlide} size={30} />
     </div>
      <div  className=' group-hover:block absolute top-[35%] md:top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 b-black/20 text-white cursor-pointer'>

     <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div 
            key={slideIndex} onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? "text-red-500" : ""}`}>
                <RxDotFilled/>
            </div>
        ))}
      </div>
      </div>

    </div>
  )
}

export default finalCarousel
