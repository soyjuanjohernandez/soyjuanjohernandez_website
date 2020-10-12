import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import images from "../../assets/images/images";

import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
// import Banner from './components/banner/Banner'

function App() {
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', 'dark')
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
      document.querySelector(".about__title-image").src = images.about_dark;
    }else{
      htmlElement.setAttribute('data-theme', 'dark')
      document.querySelector('.navbar__logo-img').src= images.nav_logo_negative
      document.querySelector('.navbar-item__image.navbar-item__image--about').src= images.about_two
      document.querySelector('.navbar-item__image.navbar-item__image--projects').src= images.projects_two;
      document.querySelector('.navbar-item__image--blog').src = images.blog_two;
      document.querySelector('.navbar-item__image--contact').src = images.contact_two;
      document.querySelector('.button-theme__icon').src = images.light;
      document.querySelector(".about__title-image").src = images.about;
    }

  }

  return (
    <div className="App">
      <Switch>
        <Route ><Navbar changeColor={changeColor}/></Route>
      </Switch>

      <Banner
        image={images.logo_banner_mono}
        imageAlt="Logotipo Soy Juanjo Hernández"
        title="Soy Juanjo Hernández, desarrollador frontend."
      />

      <About />
      <Projects />
      
      <section id="contact">
        <h1>Contactame</h1>
      </section>


    </div>
  );
}

export default App;
