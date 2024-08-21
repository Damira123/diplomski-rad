import React from 'react'
import "../Item/Item.css"
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
   <Link to={`/product/${props._id}`} > <img onClick={window.scrollTo(1,1)} src={props.image} alt={props.name}/> </Link> 
        <p>{props.name}</p>
      <div className='item-prices'>
         <div className='item-price-new'>
            {props.new_price}
         </div>
      </div>
    </div>
  )
}

export default Item