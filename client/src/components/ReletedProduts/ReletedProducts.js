
import React from 'react'
import new_data from "../NewCollections/Newdata.js"
import Item from "../Item/Item.js"
import "../ReletedProduts/RealatedProducts.css"

function ReletedProducts() {
  return (
    <div className="reletedproducts">
        <h1>Možda će vas zanimati</h1>
        <hr/>
        <div className="releted-items">
           {new_data.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image}  />
           } )}
        </div>
    </div>
  )
}

export default ReletedProducts