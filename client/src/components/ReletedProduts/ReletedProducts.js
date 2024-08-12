
import React, { useContext , useEffect} from 'react'
import {ShopContext} from "../Context/ShopContext.js"
import Item from "../Item/Item.js"
import "../ReletedProduts/RealatedProducts.css"

function ReletedProducts() {
  const {products, fetchProducts} = useContext(ShopContext)
  useEffect(() => {
   fetchProducts()
  }, [])
  return (
    <div className="reletedproducts">
        <h1>Možda će vas zanimati</h1>
        <hr/>
        <div className="releted-items">
           {products.map((item,i) => {
            if(item.new_collection===true){
            return <Item key={i} id={item.id} name={item.name} image={item.image}  />
          }
          else{
            return null
          }
        } 
 )}
        </div>
    </div>
  )
}

export default ReletedProducts