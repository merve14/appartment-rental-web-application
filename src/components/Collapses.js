import React, { useState, useEffect, useRef } from "react";
import "../styles/components/collapses.scss";
import upArrow from "../styles/assets/arrow-up.png";

const Collapses = ({ title, text, isHousing }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="accordion">
      <button className="accordion-visible" onClick={toggleState}>
        <h2>{title}</h2>
        <img
          className={toggle ? "active" : ""}
          src={upArrow}
          alt={toggle ? "open" : "close"}
        />
      </button>
      <div
        className={`accordion-toggle ${toggle ? "animated" : ""}`}
        style={{ height: toggle ? heightEl : "20px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? true : false}>{text}</p>
      </div>
    </div>
  );
};
export default Collapses;
