import React from 'react'
import "../NewCollections/NewCollections.css"
import { ShopContext } from '../Context/ShopContext.js'
import Item from '../Item/Item.js'
import { useContext , useEffect} from 'react'



function NewCollections() {
  const {products, fetchProducts} = useContext(ShopContext)
   useEffect(() => {
    fetchProducts()
   }, [])
  return (
    <div className='new-collections'>
      <h1>NOVO U PONUDII</h1>
      <hr />
      <div className='collections'>
         {products.map((item,i) => {
          if(item.new_collection===true){
            return <Item key={i} id={item.id} name={item.name} image={item.image}  />
          }
          else{
            return null
          }
         })}
      </div>
    </div>
  )
}

export default NewCollections