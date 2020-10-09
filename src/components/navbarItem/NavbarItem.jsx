import React from "react";
import "./NavbarItem.css";

// import images from "../../assets/images/images";

const NavbarItem = (props) => {

  const {itemImage} = props;

  return (
    <div
      className="navbar-item">
        <img
          src={itemImage || null}
          alt={itemImage || null}
          title={itemImage || null}
          className="navbar-item__image"
        />
    </div>
  );
};

export default NavbarItem;
