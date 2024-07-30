import React from 'react'
import "../stays/Footer.css"

import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";


function Footer() {
  return (
    <div className='footer'>
       <div className='contact'>
         <div className='contact1'>
            <h1>KORISNIČKA PODRŠKA</h1>
            <p>091 224 567</p>
            <p>Pon-Pet od 7h do 19h</p>
            <p>info@visitSinj.hr</p>
           </div>
           <div className='letter'>
            <p>PRIJAVITE SE ZA DODATNE INFORMACIJE</p>
            <div >
               <input type='email' placeholder='   Vaš email...' />
               <button>Prijavi me.</button>
            </div>
            <div className='social'>
               <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                 <TiSocialFacebook/>
               </a>
                <a href='https://x.com/?lang=en'>
                  <TiSocialTwitter/>
                </a>
                <a href='https://www.instagram.com/'>
                  <TiSocialInstagram/>
                </a>
            </div>
           </div>
          
        </div >
        <div className='copy' >
        <hr/>
        <p>Copywrite @ 2024 - all right reserved</p> </div>
     </div>
  )
}

export default Footer