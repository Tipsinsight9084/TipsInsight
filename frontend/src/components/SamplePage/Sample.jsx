import React from 'react'
import Progessbar from '../Progessbar'
import Resultbar from '../Resultbar'

const Sample = (props) => {

  let total = props.total
  let matchpassed = props.matchpassed
  let tosspassed = props.tosspassed

  return (
    <div className='mt-8 mb-16 '>
        <Resultbar total={total} tosspassed={tosspassed} matchpassed={matchpassed}/>
      <Progessbar title="Toss Prediction" value={tosspassed} maxvalue={total}/>
      <Progessbar title="Match Prediction" value={matchpassed} maxvalue={total}/>
    </div>
  )
}

export default Sample
