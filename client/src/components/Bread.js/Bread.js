import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "../Bread.js/Bread.css"


function Bread(props) {
    const {product} = props
  return (
    <div className='bread'>
          Home <FaArrowRight/> Suvenirnica <FaArrowRight/> {product.category} <FaArrowRight/> {product.name}
    </div>
  )
}

export default Bread