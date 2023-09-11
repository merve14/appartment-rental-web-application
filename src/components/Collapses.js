import React, { useState, useEffect, useRef } from "react";
import "../styles/components/collapses.scss";

const Collapses = ({ title, text, isHousing }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState("0px");

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(toggle ? `${refHeight.current.scrollHeight}px` : "0px");
  }, [toggle]);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`accordion ${isHousing ? "housing" : ""}`}>
      <button className="accordion-visible" onClick={toggleState}>
        <h2>{title}</h2>
        <img
          className={toggle ? "active" : ""}
          src="../arrow-top.png"
          alt="Up Arrow"
        />
      </button>
      <div
        className={`accordion-toggle ${toggle ? "animated" : ""}`}
        style={{ height: heightEl }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? true : false}>{text}</p>
      </div>
    </div>
  );
};
export default Collapses;
