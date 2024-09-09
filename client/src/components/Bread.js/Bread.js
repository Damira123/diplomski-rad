import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "../Bread.js/Bread.css"
import { useContext , useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext.js'


function Bread(props) {
 const {products, fetchProducts} = useContext(ShopContext)
  useEffect(() => {
   fetchProducts()
  }, [])
   const {product} = props
   if (!product) {
    return null; // Ili možete prikazati neku poruku, npr. "Loading..."
  }
  return (
    <div className='bread'>
          Home <FaArrowRight/> Suvenirnica  <FaArrowRight/> {product.category} <FaArrowRight/> {product.name}
    </div>
  )
}

export default Bread