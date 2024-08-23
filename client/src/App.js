import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from './pages/Home';
import Product from "./pages/Product"
import ShopCategory from './pages/ShopCategory';
import Cart from "./pages/Cart"
import Footer from './components/Footer';
import Alkarskisinj from './pages/Alkarskisinj';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import LoginPopup from './pages/LoginPopup';



function App() {

  const [sidebar, setSidebar] = useState(false)
  const [showLogin, setShowLogin] = useState(false) 
  return (
    
    <>
     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></> }
    <div className="App">
      <Router>
        < Navbar sidebar={sidebar} setSidebar={setSidebar} setShowLogin={setShowLogin} />
        <div className={sidebar ? "main-content active" : "main-content"}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Alkarskisinj' element={<Alkarskisinj/>} />
            <Route exact path='/Nakit' element={<ShopCategory  category ="Nakit" />} />
            <Route exact path='/Slike' element={<ShopCategory category="Slike" />} />
            <Route exact path='/Kip' element={<ShopCategory category="Kip"/>} />
            <Route exact path='/Ostali predmeti' element={<ShopCategory category="Ostali predmeti" />} />
            <Route exact path='/Magneti' element={<ShopCategory category="Magneti" />} />

            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path="/About" element={<About />} />
            <Route  path='/product/:productId' element={<Product/>}  />
              
            <Route exact path='/ShopCategory' element={<ShopCategory/>} />
            <Route exact path='/cart' element={<Cart/>} />
            <Route exact path='/order' element={<PlaceOrder/>} />
           
           
          </Routes>
        </div>
        <Footer/>
        
      </Router>
    </div>
   </>
   
  );

}

export default App;
