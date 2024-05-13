import React from 'react'
import Progessbar from '../Progessbar'
import Resultbar from '../Resultbar'

const Sample = () => {
  return (
    <div>
        <Resultbar total="43" predicted="43" passed="42" percentage="99"/>
      <Progessbar title="Match Prediction" value="30" maxvalue="40"/>
      <Progessbar title="Toss Prediction" value="20" maxvalue="100"/>
    </div>
  )
}

export default Sample
