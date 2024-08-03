import "../stays/Navbar.css"
import Icon from "../assents/images.jfif"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom"
import { SlBasketLoaded } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { useContext, useState } from "react";
import { ShopContext } from "./Context/ShopContext";
function Navbar({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar)
  const {getTotalcard} = useContext(ShopContext)
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <RxHamburgerMenu onClick={showSidebar} />
        </Link>
      <Link to ="/" > <img src={Icon} /> </Link>
        <div className="basket">
          <div className="basket1">
          <div className="nav-cart-count">{getTotalcard()}</div>
            <Link to="/Cart"><SlBasketLoaded /></Link>
          </div>
          <div className="basket2">
            <Link to="/LoginSignup"><VscAccount /></Link></div>
        </div>

      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoMdClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
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