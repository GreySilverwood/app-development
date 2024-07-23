import React from 'react'
import Navbars from "./components/navbars";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import General from './components/general'
import Personal from './components/personal'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/general' element={<General />}></Route>
          <Route path='/personal' element={<Personal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
