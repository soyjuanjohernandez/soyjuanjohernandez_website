import React from "react";
import "./banner.css";

const Banner = (props) => {
  const { children, image, imageAlt, title } = props;

  return (
    <header className="banner" id="banner">
      <img src={image} alt={imageAlt} title={title} />
      <div className="banner__menu" title="header">
        {children}
      </div>
    </header>
  );
};

export default Banner;
