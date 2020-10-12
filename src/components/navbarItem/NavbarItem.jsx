import React from "react";
import "./NavbarItem.css";

// import images from "../../assets/images/images";

const NavbarItem = (props) => {

  const {itemImage, title, classNameImage} = props;

  return (
    <div
      className="navbar-item">
        <img
          src={itemImage || null}
          alt={title || null}
          title={title || null}
          className={`navbar-item__image ${classNameImage || null}`}
        />
    </div>
  );
};

export default NavbarItem;
