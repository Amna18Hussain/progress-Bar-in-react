import React from 'react'
import { useState } from 'react'

function ProgressBar() {

const [input, setInput] = useState()


const onChangeInput = (event) => {
    setInput(event.target.value)
}


  return (
   <>
    <div className="container">
        <div className="box">
            <h1>Progress bar</h1>
            <div className="bar-wrapper">
                <div className="bar" style={{
                    width: `${input}%`
                }} id="Progressbar"></div>
                <span id="percentagetext">{input}%</span>
            </div>

            <div className="input" id="inputfield">
                <h2>Input Percentage:  </h2>

                 <input onChange={onChangeInput} min="0" max="100" type="number" id="percentageInput" placeholder="Enter Percentage"/>
            </div>

        </div>
    </div>
   </>
  )
}

export default ProgressBar
