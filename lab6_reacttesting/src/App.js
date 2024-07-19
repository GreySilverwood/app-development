import React from 'react'
import Navbars from "./components/navbars";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return (
    <div>
      <h1 className='title'>React Routing by Zaiqiang Li</h1>
      
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
