import { useContext, useEffect } from 'react'
import React  from 'react'
import { ShopContext } from '../Context/ShopContext.js'
import Item from '../Item/Item.js'
import "../Popular/Popular.css"
function Popular() {
   const {products, fetchProducts} = useContext(ShopContext)
   useEffect(() => {
    fetchProducts()
   }, [])
  return (
    <div className='popular'>
       <p>Ponosni na svoje nasljeđe i tradiciju</p>
        < hr />
       <div className='popular-item'>
          {products.map((item , i) => {
            if(item.popular===true){
               return <Item key={i} id={item.id} name={item.name} image={item.image}  />
             }
             else{
               return null
             }
          }  )}
       </div>
      

    </div>
  )
}
export default Popular