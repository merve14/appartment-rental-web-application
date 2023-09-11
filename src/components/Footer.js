import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/">
        <div className=".logo-and-h2">
          <img src="../VectorK.png" alt="k" />
          <img src="../house.png" alt="house" />
          <img src="../VectorS.png" alt="s" />
          <img src="../VectorA.png" alt="A" />
        </div>
      </NavLink>
      <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  );
};

export default Footer;
