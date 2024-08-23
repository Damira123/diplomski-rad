import React, { useContext,  useState  } from 'react'
import "../PlaceOrder/PlaceOrder.css"
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function PlaceOrder() {
    const {getTotalCartAmount , products, cartItems , token, url , removeFromCart } = useContext(ShopContext)
    const [data ,setData] = useState({
      Ime:"",
      Prezime:"",
      Email :"",
      Grad: "",
      Adresa: "",
      Kod :"",
      Telefon: ""
    })
    const navigate = useNavigate()
    
   const onChangeHandler =(event) => {
    const name = event.target.name
    const value = event.target.value
   setData(data=>({...data,[name]:value}))
   }
   const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    products.forEach((item) => {
        // Provjeri postoji li `id` i je li količina u košarici veća od 0
        if (cartItems[item._id] > 0) { // Koristi `item._id` ako se ID zove `_id`, ili prilagodi prema imenu polja
            let itemInfo = { ...item }; // Kreiraj kopiju `item` objekta
            itemInfo["quantity"] = cartItems[item._id]; // Postavi količinu
            orderItems.push(itemInfo); // Dodaj u `orderItems`
        } 
      })
      let orderData = {
        address:data,
        items:orderItems,
        amount:getTotalCartAmount() + 3
      }
      let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      if (response.data.success) {
        removeFromCart(); // Clear the cart after successful order
        alert("Uspješno kupljeno!"); // Display success message
        navigate('/'); // Redirect to the home page
      } else {
        alert("Error");
      }

};


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'> Informacije o isporuki </p>
        <div className='multi-fields'>
            <input required name='Ime' onChange={onChangeHandler} value={data.Ime} type='text' placeholder='Ime'/>
            <input required name='Prezime' onChange={onChangeHandler} value={data.Prezime} type='text' placeholder='Prezime'/>
        </div>
        <input required name='Email' onChange={onChangeHandler} value={data.Email} type='email' placeholder='Email' />
        <input required name='Grad' onChange={onChangeHandler} value={data.Grad} type='text' placeholder='Grad'/>
        <div className='multi-fields'>
            <input required name='Adresa' onChange={onChangeHandler} value={data.Adresa} type='text' placeholder='Adresa'/>
            <input required name='Kod' onChange={onChangeHandler} value={data.Kod} type='text' placeholder='Kod'/>
        </div>
        <input required name='Telefon' onChange={onChangeHandler} value={data.Telefon} type='text' placeholder='Telefon' />
        
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
               
               <button  type='submit' className='check'>Kupi!</button>
               
            </div>
      </div>
    </form>
  )
}

export default PlaceOrder