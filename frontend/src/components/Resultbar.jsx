import React from 'react'

const Resultbar = (props) => {

    const total = props.total;
    const matchpassed = props.matchpassed
    const tosspassed = props.tosspassed
  return (
    <div className='flex font-mont mb-12'>
        <div className='basis-1/2 flex md:flex-row flex-col text-center justify-around gap-1'>

      <div className='basis-1/4 md:text-lg text-sm py-1.5 font-bold rounded-lg bg-gradient-to-r to-customRed from-customBrown text-white border rounded-xl mx-2' >
        <span className='font-bold'> Toss Predicted:</span> {total}
      </div>
      <div className='basis-1/4 md:text-lg text-sm py-1.5 font-bold bg-gradient-to-r to-customRed from-customBrown text-white border rounded-xl mx-2'>
      <span className='font-bold'>Toss Passed:</span> {tosspassed}
      </div>
        </div>
        <div className='basis-1/2 flex md:flex-row flex-col text-center justify-around gap-1'>

      <div className='basis-1/4 md:text-lg text-sm py-1.5 font-bold bg-gradient-to-r to-customRed from-customBrown text-white border rounded-xl mx-2' >
      <span className='font-bold'> Match Predicted:</span> {total}
      </div>
      <div className='basis-1/4 md:text-lg text-sm py-1.5 font-bold bg-gradient-to-r to-customRed from-customBrown text-white border rounded-xl mx-2'>
      <span className='font-bold'>Match Passed:</span> {matchpassed}
      </div>
        </div>
     
    </div>
  )
}

export default Resultbar
