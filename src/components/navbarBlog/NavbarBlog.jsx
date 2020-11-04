import React, { useEffect } from "react";
import "./navbarBlog.css";
import { NavHashLink } from "react-router-hash-link";
import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";
import changeColorLight from "./changeColorlight";

const NavbarBlog = (props) => {
  const {
    changeColor,
    openModalSignIn,
    logoutUser,
    user,
  } = props;

  useEffect(() => {
    let elementAtrib = document.documentElement.getAttribute("data-theme");
    if (elementAtrib === "light") {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", "light");
      changeColorLight();
    }
  });

  const colorToMain = () => {
    const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", "dark");
  }

  const menuToggle = () => {
    let menuToggle = document.querySelector(".navbar-blog__menu");
    menuToggle.classList.toggle("displayToggle");
  };

  return (
    <nav className="navbar-blog">
      <NavHashLink to="/" smooth title="Home">
        <div
          className="navbar-blog__logo navbar-blog__item selected"
          title="Logotipo Soy Juanjo Hernández"
          onClick={colorToMain}
        >
          <img
            className="navbar-blog__logo-img"
            src={images.nav_logo_negative}
            alt="Logotipo Soy Juanjo Hernández"
            title="Logotipo Soy Juanjo Hernández"
          />
        </div>
      </NavHashLink>

      <div className="navbar-blog__collapsed-button" onClick={menuToggle}>
        <img src={images.menu_white} alt="Menú" title="Menú" />
      </div>

      <div className="navbar-blog__menu">
        <NavHashLink
          to="/blog"
          smooth
          className="navbar-blog__item"
          title="Blog"
        >
          <NavbarItem
            itemImage={images.blog_two}
            title="Blog"
            classNameImage="navbar-blog-item__image--blog"
          />
        </NavHashLink>

        {!user && (
          <span className="navbar-blog-item__normal" onClick={openModalSignIn}>
            Sign In
          </span>
        )}

        {user && (
          <span className="navbar-blog-item__normal" onClick={logoutUser}>
            Logout
          </span>
        )}
        
        <div className="navbar__button-theme" onClick={changeColor}>
          <img
            src={images.light}
            alt="Light"
            title="Light"
            className="button-theme__icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlog;
