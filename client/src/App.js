import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from './pages/Home';
import Product from "./pages/Product"
import ShopCategory from "./pages/ShopCategory"
import LoginSignup from "./pages/LoginSignup"
import Cart from "./pages/Cart"
import Footer from './components/Footer';
function App() {

  const [sidebar, setSidebar] = useState(false)

  return (

    <div className="App">
      <Router>
        < Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <div className={sidebar ? "main-content active" : "main-content"}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Nakit' element={<ShopCategory category ="Nakit" />} />
            <Route exact path='/Slike' element={<ShopCategory category="Slike" />} />
            <Route exact path='/Kip' element={<ShopCategory category="Kip"/>} />
            <Route exact path='/Moda' element={<ShopCategory category="Moda" />} />
            <Route exact path='/Magneti' element={<ShopCategory category="Magneti" />} />

            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path='/Product' element={<Product/>} />
            <Route exact path=':ProductId' element={<Product/>} />
            <Route exact path='/ShopCategory' element={<ShopCategory/>} />
            <Route exact path='/LoginSignup' element={<LoginSignup/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
        </div>
        <Footer/>
        
      </Router>
    </div>

  );

}

export default App;
