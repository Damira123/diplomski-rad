import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Contact from "./pages/Contact"
import About from "./pages/About"


function App() {
  return (
    
    <div className="App">
     <Router>
       < Navbar/>
       <Routes>
         <Route exact path='/Contact' element = {<Contact/>}/>
         <Route exact path="/About" element={<About/>}/>
       </Routes>
     </Router>
    </div>
    
  );
  
}

export default App;
