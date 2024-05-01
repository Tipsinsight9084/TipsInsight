import Carousel from "./heroSection"
// import vid from "/smiling.mp4"

const slides = [
  "./p1.png",
  "./p2.png",
  "./p3.png",
//   "./4.jpg",
]


function Hero() {

  return (
    <div className="flex justify-center items-center h-auto bg-black ">
      <div className="h-full object-contain md:h-[350px] ">
        <Carousel autoSlide={false} >
          {[...slides.map((s) => (
            <img src={s} />
          )), 
        //   <video src={vid} autoPlay muted loop />
          ]}
        </Carousel>

      </div>
    </div>
  )
}

export default Hero