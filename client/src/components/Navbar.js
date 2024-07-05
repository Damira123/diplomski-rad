import "../stays/Navbar.css"
import Icon from "../assents/images.jfif"
import { Link } from 'react-router-dom';
import { SlBasketLoaded } from "react-icons/sl";
import { RiAccountPinBoxLine } from "react-icons/ri";

function Navbar() {


  return (
    <div className='navbar'>
      <div className='image'>
        <img src={Icon}></img>
      </div>
      <div className='icons'>
        <div className="basket">
        <Link to="/Contact" > <SlBasketLoaded/> </Link>
        <Link to="/Contact">Cart</Link>
        <Link to="/About"><RiAccountPinBoxLine/></Link>
        <Link to="/About">Account</Link>
        </div>

        
      </div> 
    </div> 



    
  )
}

export default Navbar