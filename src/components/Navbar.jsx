import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe App</h1>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
