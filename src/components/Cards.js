import React, { useEffect, useState } from "react";
import data from "../styles/assets/fichier.json";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <div className="housting-container">
      <ul>
        {data.map((item) => (
          <li key={item.id} className="card" id={item.id}>
            <NavLink to={`/housing/${item.id}`}>
              <img className="cover-image" src={item.cover} alt={item.title} />
              <h3 className="card-title">{item.title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
