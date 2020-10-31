import React, { useEffect } from "react";
import "./navbar.css";
import { NavHashLink } from "react-router-hash-link";
import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";
import changeColorLight from "./changeColorlight";

const Navbar = (props) => {
  const { changeColor } = props;

  // useEffect(() => {
  //   // let elementAtrib = document.documentElement.getAttribute("data-theme");
  //   // if (elementAtrib === "light") {
      
  //     // changeColorLight();
  //   // }
  //   // changeColor();
  // });

  const menuToggle = () => {
    let menuToggle = document.querySelector(".navbar__menu");
    menuToggle.classList.toggle("displayToggle");
  };

  return (
    <nav className="navbar">
      <NavHashLink to="#banner" smooth title="Home">
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
      </NavHashLink>

      <div className="navbar__collapsed-button" onClick={menuToggle}>
        <img src={images.menu_white} alt="Menú" title="Menú" />
      </div>

      <div className="navbar__menu">
        <NavHashLink to="#about" smooth className="navbar__item " title="About">
          <NavbarItem
            itemImage={images.about_two}
            title="Sobre mi"
            classNameImage="navbar-item__image--about"
          />
        </NavHashLink>

        <NavHashLink
          to="#projects"
          smooth
          className="navbar__item"
          title="Projects"
        >
          <NavbarItem
            itemImage={images.projects_two}
            title="Proyectos"
            classNameImage="navbar-item__image--projects"
          />
        </NavHashLink>

        <NavHashLink to="/blog" smooth className="navbar__item" title="Blog">
          <NavbarItem
            itemImage={images.blog_two}
            title="Blog"
            classNameImage="navbar-item__image--blog"
          />
        </NavHashLink>

        <NavHashLink
          to="#contact"
          smooth
          className="navbar__item"
          title="Contáctame"
        >
          <NavbarItem
            itemImage={images.contact_two}
            title="Contáctame"
            classNameImage="navbar-item__image--contact"
          />
        </NavHashLink>

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

export default Navbar;
