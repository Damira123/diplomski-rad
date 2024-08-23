import React, { useContext, useEffect } from 'react'
import "../CartItems/CartItems.css"
import { ShopContext } from '../Context/ShopContext'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function CartItems() {
 const {getTotalCartAmount, cartItems , removeFromCart} = useContext(ShopContext)   
 const {products, fetchProducts} = useContext(ShopContext)
     useEffect(() => {
      fetchProducts()
      }, [])
      useEffect(() => {
        console.log(products); // Provjeri da li su proizvodi uspješno dohvaćeni
      }, [products]);

      
 
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
            if (cartItems[e._id]>0) 
            {
              return  <div key={e._id}>  
              <div className='format  format-main'>
                <img src={e.image} alt='' className='format-img' />
                 <p>{e.name}</p>
                 <p>{e.new_price}</p>
                 <button className='cartitems-quantity'>{cartItems[e._id]}</button>
                 <p> {parseFloat(e.new_price) * cartItems[e._id]}€ </p>
                 <FaXmark className='remove-icon' onClick={() => {removeFromCart(e._id)}} />
              
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
                        <p>{3}</p>
                    </div>
                    <div className='total-item'>
                        <h3>Ukupno</h3>
                        <h3>{getTotalCartAmount()+3}€</h3>
                    </div>
                </div>
               <Link to={"/order"}>
               <button className='check'>Provjeri</button>
               </Link>
            </div>
         </div>


    </div>
  )
}

export default CartItems