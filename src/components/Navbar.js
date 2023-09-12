import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../styles/assets/LOGO.png";

const Nav = () => {
  const location = useLocation();
  return (
    <div className="navigation">
      <NavLink to="/">
        <img className="logo-image" src={logo} alt="Logo.png" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" className={location.Home === "/" ? "active" : ""}>
            Accueil{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
