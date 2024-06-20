import Strap from "./components/strap"

export default function Box(props){

   let League = props.League
   let Year = props.Year
   let State = props.State
   let Matches = props.Matches
   let btn_des = props.btn_des
   let btn_link = props.btn_link
return(
    <>

<div className=" mb-4 w-11/12 md:w-4/5 lg:w-4/5 xl:w-1/2 mx-auto font-mont"> {/* Centered and adjusted width */}
        <div className="rounded-3xl p-1 md:p-2 bg-gradient-to-r from-customRed to-customBrown">
          <div className="text-center">
            <div className="font-mont font-semibold text-xl mt-2 md:text-3xl text-white"> {/* Adjusted font size */}
             {State}
            </div>
            
          </div>
          <div className="mt-4 md:mt-6 border border-black w-99/100 bg-white rounded-b-3xl flex flex-col items-center ">


          {Matches.slice(0, 5).map((item) => (
          <Strap prev="true" btn_link = {btn_link} key={item.uniqueId} btn_des={btn_des} data={item}/>
          ))}
          </div>
   </div>
   </div>
   </>
)
}