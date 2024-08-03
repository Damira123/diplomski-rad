import React from 'react'
import data from "../Popular/data.js"
import Item from '../Item/Item.js'
import "../Popular/Popular.css"
function Popular() {
  return (
    <div className='popular'>
       <p>Ponosni na svoje nasljeđe i tradiciju</p>
        < hr />
       <div className='popular-item'>
          {data.map((item , i) => {
             return <Item key={i} id={item.id} name={item.name} image={item.image} 
              new_price={item.new_price} old_price = {item.old_price}
             />
          })}
       </div>
      

    </div>
  )
}
export default Popular