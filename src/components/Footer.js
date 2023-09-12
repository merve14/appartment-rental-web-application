import React from "react";
import { NavLink } from "react-router-dom";
import K from "../styles/assets/VectorK.png";
import houseVector from "../styles/assets/house.png";
import S from "../styles/assets/VectorS.png";
import A from "../styles/assets/VectorA.png";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/">
        <div className=".logo-and-h2">
          <img src={K} alt="k" />
          <img src={houseVector} alt="house" />
          <img src={S} alt="s" />
          <img src={A} alt="A" />
        </div>
      </NavLink>
      <h2>© 2020 Kasa. All rights reserved</h2>
    </div>
  );
};

export default Footer;
