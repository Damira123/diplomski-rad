import React from 'react'
import "../Offers/Offers.css"
import videoframe_0 from "../Offers/videoframe_0.png"

function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <p>Čuvajmo običaje naših pradjedova !</p>
            

        </div>
       <div className='offers-right'>
           <img src={videoframe_0}/>
           <button>ZAVIRIMO!</button>
       </div>
    </div>
  )
}

export default Offers