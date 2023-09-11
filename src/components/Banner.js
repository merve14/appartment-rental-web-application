import React from "react";

const Banner = (props) => {
  const url = decodeURIComponent(props.image);
  const style = {
    background: `url(${url}) center/cover`,
  };
  return (
    <div className="banner" style={style}>
      <h1 className="h1-on-image">
        {props.title}
        {props.subtitle}
      </h1>
    </div>
  );
};

export default Banner;
