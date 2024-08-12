import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import Item from "../components/Item/Item"
import "../stays/ShopCategory.css"

function ShopCategory(props) {
  const {products, fetchProducts} = useContext(ShopContext)
  useEffect(() => {
   fetchProducts()
  }, [])
  return (
    <div className='shopcategory'>
       <div className='indexsort'>
        <p>
          <span> Prikaži 1-10</span> od 61 suvenira
        </p>
       </div>
      
       <div className='products'>
          {products.map((item,i) => {
             if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} 
              new_price={item.new_price} old_price = {item.old_price} texst = {item.texst} texst1={item.texst1} />
             }
             else {
              return null
             }

          })}

       </div>
    </div>
  )
}

export default ShopCategory