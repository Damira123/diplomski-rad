import "../stays/Navbar.css"
import Icon from "../assents/images.jfif"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SidebarData } from "./SidebarData";
import { Link, useNavigate } from "react-router-dom"
import { SlBasketLoaded } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { useContext } from "react";
import { ShopContext } from "./Context/ShopContext";

function Navbar({ sidebar, setSidebar , setShowLogin  }) {
  const showSidebar = () => setSidebar(!sidebar)
  const {getTotalCard} = useContext(ShopContext)
  const { token,setToken} = useContext(ShopContext)
  const navigate = useNavigate()
  const logout = ()=> {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <RxHamburgerMenu onClick={showSidebar} />
        </Link>
      <Link to ="/" > <img src={Icon} alt="" /> </Link>
        <div className="basket">
          <div className="basket1">
          <div className="nav-cart-count">{getTotalCard()}</div>
            <Link to="/Cart"><SlBasketLoaded /></Link>
          </div>
          <div className="basket2">
            {!token?  <Link onClick={() => setShowLogin(true)}> Sign in </Link>
             : <div className="navbar-profile">
                <VscAccount/>
                <ul className="nav-proile-drop">
                  <li onClick={logout} >
                    <IoIosLogOut/>
                    <p>Logout</p>
                  </li>
                  
                  <li onClick={logout} >
                    <SlBasketLoaded/>
                    <p>Naružba</p>
                  </li>
                </ul>
             </div>
                   }
            </div>
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