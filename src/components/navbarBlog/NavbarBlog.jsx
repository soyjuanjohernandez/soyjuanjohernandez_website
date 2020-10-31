import React, { useEffect } from "react";
import "./navbarBlog.css";
import { NavHashLink } from "react-router-hash-link";
import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";
import changeColorLight from "./changeColorlight";

const NavbarBlog = (props) => {
  const { changeColor, openModalSignUp, openModalSignIn, logoutUser } = props;

  useEffect(() => {
    let elementAtrib = document.documentElement.getAttribute("data-theme");
    if (elementAtrib === "light") {
      const htmlElement = document.documentElement;
      htmlElement.setAttribute("data-theme", "light");
      changeColorLight();
    }
  });

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
          // onClick={}
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

        <span className="navbar-blog-item__normal" onClick={openModalSignUp}>
          Sign up
        </span>

        <span className="navbar-blog-item__normal" onClick={openModalSignIn}>
          Sign In
        </span>

        <span className="navbar-blog-item__normal" onClick={logoutUser}>
          Logout
        </span>
        {/* <button onClick={openModal}>mmodal</button> */}

        {/* <a href="/#">Sign in</a>
        <a href="/#">Logout</a> */}

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
