import React, { useState } from "react";
import "./NavbarItem.css";

import images from "../../assets/images/images";

const NavbarItem = () => {
  const [ImagePrimary, setImagePrimary] = useState(true);
  const [ImageSecondary, setImageSecondary] = useState(false);
  return (
    <div
      className="navbar-item"
      onMouseEnter={() => {
        setImagePrimary(false);
        setImageSecondary(true);
      }}
      onMouseLeave={() => {
        setImagePrimary(true);
        setImageSecondary(false);
      }}
    >
      {/* <h3>Sobre mi</h3> */}
      {ImagePrimary && (
        <img
          src={images.about}
          alt=""
          srcset=""
          className="navbar-item__image"
        />
      )}
      {ImageSecondary && (
        <img
          src={images.contact}
          alt=""
          srcset=""
          className="navbar-item__image"
        />
      )}
    </div>
  );
};

export default NavbarItem;
