import React, { useContext } from 'react'
import "../PlaceOrder/PlaceOrder.css"
import { ShopContext } from '../Context/ShopContext'

function PlaceOrder() {
    const {getTotalCartAmount} = useContext(ShopContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'> Informacije o isporuki </p>
        <div className='multi-fields'>
            <input type='text' placeholder='Ime'/>
            <input type='text' placeholder='Prezime'/>
        </div>
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Grad'/>
        <div className='multi-fields'>
            <input type='text' placeholder='Adresa'/>
            <input type='text' placeholder='Kod'/>
        </div>
        <input type='text' placeholder='Telefon' />
        
      </div>
      <div className='place-order-right'>
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
               
               <button className='check'>Nastavi sa plaćanjem</button>
               
            </div>
      </div>
    </form>
  )
}

export default PlaceOrder