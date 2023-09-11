import React from "react";
import { NavLink } from "react-router-dom";
import sass from "../styles/components/errorPage.scss";
const Error404 = () => {
  return (
    <div className="error-page">
      <h1 className="h1">404</h1>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="homepage">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default Error404;
