import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import User from "../Components/User";
import Page404 from "../Components/Page404";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
