import React from 'react'
// import ProgressBar from "@ramonak/react-progress-bar";
import './Progressbar.css'

const Progessbar = (props) => {

    const title = props.title;
    const value = props.value;
    const maxvalue = props.maxvalue;
    let percentage = (value/maxvalue) * 100;
   percentage =  percentage.toFixed(2)


    const completedClassNameVariable = `bg-customRed w-[${value}%]`;
    
  return (
    <>
    {/* <div className='w-[70%] m-auto mt-10 bg-transparent'>
        <div className='title'><h1>{title}</h1></div>
      <ProgressBar completed={value} maxCompleted={maxvalue} barContainerClassName="bg-gray-300" completedClassName={completedClassNameVariable} />
    </div> */}
    <div className='md:mt-16 mt-6 font-mont'>

    <div className="space-y-10 bg-transparent">
  {/* Progress */}
  <div className='w-[80%] m-auto'>
    <div className="mb-2 flex justify-between items-center">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <span className="text-base text-gray-800 font-bold dark:text-white"> {percentage}% ({value}/{maxvalue})</span>
    </div>
    <div
      className="flex w-full md:h-4 h-6 border-4 border-double border-black bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="flex flex-col justify-center rounded-full overflow-hidden bg-gradient-to-r to-customRed from-customBrown text-xs text-white text-center whitespace-nowrap transition duration-5000 dark:bg-blue-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
  {/* End Progress */}
</div>

    </div>
    </>
  )
}

export default Progessbar
