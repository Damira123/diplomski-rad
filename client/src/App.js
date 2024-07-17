import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Magnets from "./pages/Magnets"
import Slike from "./pages/Slike"
import Nakit from "./pages/Nakit"
import Staklenipredmeti from "./pages/Staklenipredmeti"
import suvenirs from './pages/suvenirs';




function App() {
  return (
    
    <div className="App">
     <Router>
       < Navbar/>
       <Routes>
         <Route exact path='/Contact' element = {<Contact/>}/>
         <Route exact path="/About" element={<About/>}/>
         <Route exact path='/Magnets' element = {<Magnets/>}/>
         <Route exact path='/Slike' element = {<Slike/>}/>
         <Route exact path='/Nakit' element = {<Nakit/>}/>
         <Route exact path='/Staklenipredmeti' element = {<Staklenipredmeti/>}/>
         <Route exact path='/suvenirs' element = {<suvenirs/>} />

       </Routes>
     </Router>
    </div>
    
  );
  
}

export default App;
