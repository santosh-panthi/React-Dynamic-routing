import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About';
import User from './Components/User';
import Nav from './Components/Nav.jsx';
import Userdetails from './Components/Userdetails';

function App() {
  return (
    <div className='mt-10 w-1/2 m-auto'>
      <Nav/>



      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/user/:name' element={<Userdetails/>} />
        {/* </Route> */}

      </Routes>
      
    </div>
  )
}

export default App
