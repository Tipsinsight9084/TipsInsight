import React from 'react'

const Resultbar = (props) => {

    const total = props.total;
    const predicted = props.predicted;
    const passed = props.passed;
    const percentage = props.percentage;
  return (
    <div className='flex font-mont'>
        <div className='basis-1/2 flex md:flex-row flex-col text-center justify-around gap-1'>

      <div className='basis-1/4 md:text-lg text-sm bg-gradient-to-r to-customRed via-customBrown from-customRed text-white border rounded-lg mx-2' >
        <span className='font-semibold'>Total Match:</span> {total}
      </div>
      <div className='basis-1/4 md:text-lg text-sm bg-gradient-to-r to-customRed from-customBrown text-white border rounded-lg mx-2'>
      <span className='font-semibold'>Total Predicted:</span> {predicted}
      </div>
        </div>
        <div className='basis-1/2 flex md:flex-row flex-col text-center justify-around gap-1'>

      <div className='basis-1/4 md:text-lg text-sm bg-gradient-to-r to-customRed from-customBrown text-white border rounded-lg mx-2' >
      <span className='font-semibold'>Passed:</span> {passed}
      </div>
      <div className='basis-1/4 md:text-lg text-sm bg-gradient-to-r to-customRed from-customBrown text-white border rounded-lg mx-2'>
      <span className='font-semibold'>Percentage:</span> {percentage}%
      </div>
        </div>
     
    </div>
  )
}

export default Resultbar
