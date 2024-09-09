import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import Item from "../components/Item/Item"
import "../stays/ShopCategory.css"
import { FiSearch } from "react-icons/fi";

function ShopCategory(props) {
  const {products, fetchProducts} = useContext(ShopContext)

  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
   fetchProducts()
  }, [])
  
  const filteredProducts = products.filter((item) => {
    const name = (item.name || "").toLowerCase(); // Osiguranje da name nije undefined
    const description = (item.description || "").toLowerCase(); // Osiguranje da description nije undefined

    return (
      (name.includes(searchTerm.toLowerCase()) || // Pretraga po imenu
       description.includes(searchTerm.toLowerCase())) && // Pretraga po opisu
      item.category === props.category // Filtriranje po kategoriji
    );
  });
  
  return (
    <div className='shopcategory'>
       <div className='indexsort'>
       
         
        <input
          type="text"
          placeholder="Pretraži proizvode"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Ažuriranje stanja pretrage
          className="search-inputs"
        />
         <FiSearch id='searchicon'/>

        
       </div>
      
       <div className='products'>
       {filteredProducts.map((item, i) => (
          <Item
            key={i}
            _id={item._id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            category={item.category}
            description={item.description}
            dimenzion={item.dimenzion}
          />
        ))}

       </div>
    </div>
  )
}

export default ShopCategory