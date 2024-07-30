import React, { useContext } from 'react'
import "../stays/ShopCategory.css"
import  { ShopContex } from '../components/Contexs/ShopContex'
import Item from '../components/Item/Item'



function ShopCategory(props) {
  const {allproduts} = useContext(ShopContex)
  return (
    <div className='shop-category'>
       <div className='category-sort'>
            <p>
              <span>Prikaži od 1-4</span> od 10 proizvoda
            </p>
        <div className='sortcategory'>
          Sort by
        </div>
        <div className='categoryproducts'>
          {allproduts.map( (item,i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} image={item.image} name={item.name}/>
            }
            else{
              return null
            }
          }

          )}
        </div>
       </div>
    </div>
  )
}

export default ShopCategory