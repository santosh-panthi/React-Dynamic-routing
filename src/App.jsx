import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import User from './Components/User';
import Userdetails from './Components/Userdetails';

function App() {
  return (
    <div className=' w-1/2 m-auto'>

      <nav className='flex justify-center gap-10 items-center pt-10 text-xl mb-10'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/user' element={<User/>} />
      </Routes>
      
    </div>
  )
}

export default App
