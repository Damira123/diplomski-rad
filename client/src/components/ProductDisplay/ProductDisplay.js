import React, { useContext } from 'react'
import "../ProductDisplay/ProductDisplay.css"
import { ShopContext } from '../Context/ShopContext';


function ProductDisplay(props) {
   const {product} = props;
    const {addToCart} = useContext(ShopContext)
    if (!product) {
      return <div>Loading...</div>; // ili neka druga poruka za loading
  }
   
    
  return (
    <div className='productdisplay'>
      <div className='product-left'>
      <div className='product-imglist'>
            <img src={product.image} alt='' />
             <img src={product.image} alt='' />
             <img src={product.image} alt='' />
          </div>
          <div className='productdisplay-img'>
          <  img className='mainimg' src={product.image} alt='' />
          </div>
      </div>
      <div className='product-right'>
         <h1>{product.name}</h1>
         <div className='product-price'>
            {product.new_price}
         </div>
         <div className='product-texst'>
            {product.description}
         </div>
         <div className='product-texst1'>
            {product.dimenzion}
         </div>
         <div className='product-add'>
            <button onClick={() => {addToCart(product.id)}}>DODAJ U KOŠARICU</button>
         </div>
      </div>

    </div>
  )
}

export default ProductDisplay