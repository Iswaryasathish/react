import React  from 'react';
import Navbar from './Components/navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import SignUp from "./Components/SignUp"
import Contact from "./Components/Contact";


const App =()=>{
  return (
    <div className='App'>
        

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          

        </Routes>
        <Navbar/>
    </div>
      
  )
}

export default App;

