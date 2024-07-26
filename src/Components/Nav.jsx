import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex justify-center gap-10 items-center mt-4 text-xl font-bold">
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-300" : "",
              e.isActive ? "font-bold" : "",
            ].join(" ");
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#fca5a5" : "",
              fontWeight: e.isActive ? "bold" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            [
              e.isActive ? "text-red-300 " : "",

              e.isActive ? "font-bold" : "",
            ].join(" ")
          }
          to="/user"
        >
          User
        </NavLink>
        
      </nav>
    </div>
  );
}
export default Nav;