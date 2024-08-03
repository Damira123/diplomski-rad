import React from 'react'
import "../NewCollections/NewCollections.css"
import new_data from "../NewCollections/Newdata.js"
import Item from '../Item/Item.js'



function NewCollections() {
  return (
    <div className='new-collections'>
      <h1>NOVO U PONUDII</h1>
      <hr />
      <div className='collections'>
         {new_data.map((item,i) => {
          return <Item key={i} id={item.id} image={item.image} name={item.name}  />
         })}
      </div>
    </div>
  )
}

export default NewCollections