import React from "react";
import "./navbar.css";
import { NavHashLink as NavLink } from "react-router-hash-link";

import images from "../../assets/images/images";
import NavbarItem from "../navbarItem/NavbarItem";

const Navbar = (props) => {
  const { children } = props;

  return (
    <nav className="navbar">
      <NavLink to="#banner" smooth title="Home">
        <div
          className="navbar__logo navbar__item selected"
          title="Logotipo Soy Juanjo Hernández"
        >
          <img
            src={images.nav_logo_negative}
            alt="Logotipo Soy Juanjo Hernández"
            title="Logotipo Soy Juanjo Hernández"
          />
        </div>
      </NavLink>
      <div className="navbar__menu">
        {children}
        <NavLink to="#about" smooth className="navbar__item " title="About">
          <NavbarItem itemImage={images.about_two} title="Sobre mi" />
        </NavLink>

        <NavLink
          to="#projects"
          smooth
          className="navbar__item"
          title="Projects"
        >
          <NavbarItem itemImage={images.projects_two} title="Proyectos" />
        </NavLink>

        <NavLink to="#blog" smooth className="navbar__item" title="Blog">
          <NavbarItem itemImage={images.blog_two} title="Blog" />
        </NavLink>

        <NavLink to="#blog" smooth className="navbar__item" title="Contáctame">
          <NavbarItem itemImage={images.contact_two} title="Contáctame" />
        </NavLink>
        
      </div>
    </nav>
  );
};

export default Navbar;
