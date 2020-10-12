import React, { useEffect} from "react";
import "./navbar.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";

const Navbar = () => {

  useEffect(() => {
    document.querySelector('.navbar-item__image.navbar-item__image--about').src = images.about_two;
    document.querySelector('.navbar-item__image--projects').src = images.projects_two;
    document.querySelector('.navbar-item__image--blog').src = images.blog_two;
    document.querySelector('.navbar-item__image--contact').src = images.contact_two;
    document.querySelector('.button-theme__icon').src = images.light;
  });

  const changeColor = () => {
    const htmlElement = document.documentElement;
    let elementAtrib = htmlElement.getAttribute("data-theme");
    if(elementAtrib === 'dark'){
      htmlElement.setAttribute('data-theme', 'light');
      document.querySelector('.navbar__logo-img').src= images.nav_logo_color
      document.querySelector('.navbar-item__image.navbar-item__image--about').src= images.about_two_dark
      document.querySelector('.navbar-item__image.navbar-item__image--projects').src= images.projects_two_dark;
      document.querySelector('.navbar-item__image--blog').src = images.blog_two_dark;
      document.querySelector('.navbar-item__image--contact').src = images.contact_two_dark;
      document.querySelector('.button-theme__icon').src = images.dark;
    }else{
      htmlElement.setAttribute('data-theme', 'dark')
      document.querySelector('.navbar__logo-img').src= images.nav_logo_negative
      document.querySelector('.navbar-item__image.navbar-item__image--about').src= images.about_two
      document.querySelector('.navbar-item__image.navbar-item__image--projects').src= images.projects_two;
      document.querySelector('.navbar-item__image--blog').src = images.blog_two;
      document.querySelector('.navbar-item__image--contact').src = images.contact_two;
      document.querySelector('.button-theme__icon').src = images.light;
    }

  }


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
      <div className="navbar__menu">

        <NavLink to="#about" smooth className="navbar__item " title="About">
          <NavbarItem  title="Sobre mi" classNameImage="navbar-item__image--about" />
        </NavLink>

        <NavLink
          to="#projects"
          smooth
          className="navbar__item"
          title="Projects"

        >
          <NavbarItem  title="Proyectos" classNameImage="navbar-item__image--projects" />
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
          <NavbarItem title="Contáctame" classNameImage="navbar-item__image--contact"/>
        </NavLink>

        <div className="navbar__button-theme" onClick={changeColor}>
          <img alt="Light" title="Light" className="button-theme__icon"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
