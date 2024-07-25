import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Show from './Components/Show';

function App() {
  return (
    <div>
      <nav className="flex justify-center items-center gap-10 mt-5 ">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
