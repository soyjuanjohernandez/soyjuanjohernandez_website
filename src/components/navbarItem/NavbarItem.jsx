import React from "react";
import "./NavbarItem.css";

const NavbarItem = (props) => {
  const { itemImage, title, classNameImage, children, classNameItem } = props;

  return (
    <div className={`navbar-item ${classNameItem}`} >
      <img
        src={itemImage || null}
        alt={title || null}
        title={title || null}
        className={`navbar-item__image ${classNameImage || null}`}
      />
      {children}
    </div>
  );
};

export default NavbarItem;
