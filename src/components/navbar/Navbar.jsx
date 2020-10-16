import React, { useEffect } from "react";
import "./navbar.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";

const Navbar = (props) => {
  const { changeColor } = props;

  useEffect(() => {
    document.querySelector(
      ".navbar-item__image.navbar-item__image--about"
    ).src = images.about_two;
    document.querySelector(".navbar-item__image--projects").src =
      images.projects_two;
    document.querySelector(".navbar-item__image--blog").src = images.blog_two;
    document.querySelector(".navbar-item__image--contact").src =
      images.contact_two;
    document.querySelector(".button-theme__icon").src = images.light;
  });

  // let menuToggle = document.querySelector(".navbar__collapsed-button");
  // let menu = document.querySelector(".navbar__menu");

   const menuToggle = () => {
    let menuToggle = document.querySelector(".navbar__menu");
    menuToggle.classList.toggle("displayToggle");
    };
  

  return (
    <nav className="navbar">
      <NavLink to="#banner" smooth title="Home">
        <div
          className="navbar__logo navbar__item selected"
          title="Logotipo Soy Juanjo Hernández"
        >
          <img
            className="navbar__logo-img"
            src={images.nav_logo_negative}
            alt="Logotipo Soy Juanjo Hernández"
            title="Logotipo Soy Juanjo Hernández"
          />
        </div>
      </NavLink>

      <div className="navbar__collapsed-button" onClick={menuToggle}>
        <img src={images.menu_white} alt="Menú" title="Menú"/>
      </div>

      <div className="navbar__menu">
        <NavLink to="#about" smooth className="navbar__item " title="About">
          <NavbarItem
            title="Sobre mi"
            classNameImage="navbar-item__image--about"
          />
        </NavLink>

        <NavLink
          to="#projects"
          smooth
          className="navbar__item"
          title="Projects"
        >
          <NavbarItem
            title="Proyectos"
            classNameImage="navbar-item__image--projects"
          />
        </NavLink>

        <NavLink to="#" smooth className="navbar__item" title="Blog">
          <NavbarItem title="Blog" classNameImage="navbar-item__image--blog" />
        </NavLink>

        <NavLink
          to="#contact"
          smooth
          className="navbar__item"
          title="Contáctame"
        >
          <NavbarItem
            title="Contáctame"
            classNameImage="navbar-item__image--contact"
          />
        </NavLink>

        <div className="navbar__button-theme" onClick={changeColor}>
          <img alt="Light" title="Light" className="button-theme__icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
