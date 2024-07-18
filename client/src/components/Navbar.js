import "../stays/Navbar.css"
import Icon from "../assents/images.jfif"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SidebarData } from "./SidebarData";
import {Link} from "react-router-dom"
import { SlBasketLoaded } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  const [sidebar , setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
       <div className="navbar">
           <Link to="#" className="menu-bars">
            <RxHamburgerMenu onClick={showSidebar}/>
           </Link>
          <img src={Icon}/>
         <div className="basket">
           <div className="basket1">
            <Link to="suvenirs"><SlBasketLoaded/></Link>
               <div className="dot"></div>
            </div>
           <div className="basket2">
            <Link to="Contact"><VscAccount/></Link></div>
          </div> 
               
       </div>
       <nav className={sidebar ? "nav-menu active" : "nav-menu" } >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                 <IoMdClose/>
              </Link>
            </li>
            {SidebarData.map((item,index) => {
              return (
                 <li key={index} className={item.cName} >
                  <Link to={item.path} >
                   
                    <span>{item.title}</span>
                  </Link>
                 </li>
              )
            })}
          </ul>
       </nav>

    </>
    
    
  )
}

export default Navbar