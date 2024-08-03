import React from 'react'
import "../stays/LoginSIgnup.css"


function LoginSignup() {
  return (
    <div className='loginsignup'>
      
      <div className='loginsignup-conteiner'>
        
        <h1>Sign up</h1>
        
        <div className='loginsignup-fildes'>
          <input type='texst' placeholder='Ime' />
          <input type='email' placeholder='Tvoj email'/>
          <input type='lozinka' placeholder='Lozinka' />
        </div>
        <button>Nastavi</button>
        <p className='loginsignup-login'>
          Ima te već račun?
          <span>Prijavi se </span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>Slažen se uslugon korištenja i politikom zaštite privatnosti.</p>
          
        </div>
      </div>


    </div>
  )
}

export default LoginSignup