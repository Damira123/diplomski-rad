import React, { useContext, useEffect } from 'react'
import "../CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import { FaXmark } from "react-icons/fa6";


function CartItems() {
 const {getTotalCartAmount, cartItems , removeFromCart} = useContext(ShopContext)   
 const {products, fetchProducts} = useContext(ShopContext)
 useEffect(() => {
  fetchProducts()
 }, [])
 
  return (
    <div className='cartitems'>
          <div className='format-main'>
            <p>Suvenir</p>
            <p>Ime</p>
            <p>Cijena</p>
            <p>Količina</p>
            <p>Ukupno</p>
            <p>Ukloni</p>
          </div>
          <hr/>
         {products.map((e)=>{
            if (cartItems[e.id]>0) 
            {
              return  <div>
              <div className='format  format-main'>
                 <img src={e.image} alt='' className='format-img' />
                 <p>{e.name}</p>
                 <p>{e.new_price}</p>
                 <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                 <p> {parseFloat(e.new_price) * cartItems[e.id]}€ </p>
                 <FaXmark className='remove-icon' onClick={() => {removeFromCart(e.id)}} />
              </div>
           <hr />
           </div>
             
            }
        return null
         })}
         <div className='items-down'>
            <div className='items-total'>
                <h2>Ukupni iznos košarice</h2>
                <div>
                    <div className='total-item'>
                      <p>Zbroj</p>
                      <p>{getTotalCartAmount()}€</p>
                    </div>
                    <hr/>
                    <div className='total-item'>
                        <p>Dostava</p>
                        <p>Besplatna</p>
                    </div>
                    <div className='total-item'>
                        <h3>Ukupno</h3>
                        <h3>{getTotalCartAmount()}€</h3>
                    </div>
                </div>
                <button className='check'>Provjeri</button>
            </div>
            <div className='promobox'>
                <p>Imaš li kupon ?</p>
                <div className='box'>
                <input type='text' placeholder='Kod za popust...'/>
                <button>DODAJ</button>
                </div>
            </div>
         </div>


    </div>
  )
}

export default CartItems