import React from 'react'
import "../stays/LoginPopup.css"
import { useState, useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from '../components/Context/ShopContext';
import axios from 'axios';


function LoginPopup({setShowLogin}) {
    const [currState,setCurrState] = useState("Login")

    
    const {url , setToken} = useContext(ShopContext)
    const [showPassword] = useState(false);
    

    const [data , setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setData(data=>({...data,[name]:value }))
    }

    //nadolje u Word + izbrisati komentare ispod + ovaj
    const onLogin = async (event) => {
  event.preventDefault();

  let newUrl = url;

  if (currState === "Login") {
    newUrl += "/api/user/login";
  } else {
    newUrl += "/api/user/register";
  }

  try {
    console.log("Request URL:", newUrl);
    console.log("Request Data:", data);

    const response = await axios.post(newUrl, data);

    console.log("Server Response:", response.data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message || "Login/registration failed.");
    }
  } catch (error) {
    console.error("Axios Error:", error);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response Data:", error.response.data);

      alert(
        error.response.data.message ||
        error.response.data.error ||
        "Server error occurred."
      );
    } else if (error.request) {
      alert("Cannot connect to the server. Please check if the backend is running.");
    } else {
      alert("An unexpected error occurred.");
    }
  }
};
    // const onLogin = async(event) => {
    //     event.preventDefault()
    //     let newUrl = url
    //     if (currState === "Login") {
    //       newUrl += "/api/user/login"
    //     }
    //     else{
    //       newUrl += "/api/user/register"
    //     }
    //     const response = await axios.post(newUrl,data)
        
    //    if (response.data.success) {
    //      setToken(response.data.token)
    //      localStorage.setItem("token" , response.data.token)
    //      setShowLogin(false)
    //    }
    //    else{
    //     alert(response.data.message)
    //    }
    // }
  return (
    <div className='login-popup'>
       <form onSubmit={onLogin}className='login-popup-container'>
         <div className='login-popup-title'>
           <h2>{currState}</h2>
           <RxCross2 onClick={() =>setShowLogin(false)}/>
         </div>
         <div className='login-popup-inputs'>
            {currState==="Login"?<></>:
            <input type='text'  name='name' onChange={onChangeHandler} value={data.name} placeholder='Name' required/>}
            <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Email' required/>
            <input type={showPassword? "text" : "password"} name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required/>
         </div>
         <button type='submit'>{currState==="Sign Up"?"Create account":"Login" }</button>
         <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>Nastavljanjem, slažen sa pravilima privatnosti</p>
         </div>
         {currState==="Login"? <p>Stvori novi račun?<span onClick={()=>setCurrState("Sign Up")}> Click here</span></p>:
         <p>Imaš račun? <span onClick={()=>setCurrState("Login")}> Login here</span></p>}
       </form>
    </div>
  )
}

export default LoginPopup