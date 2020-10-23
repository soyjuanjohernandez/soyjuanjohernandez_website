import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import images from "../../assets/images/images";

import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/contact";
import changeColor from "./changeColor";

function App() {
  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', 'dark')
  });

  return (
    <div className="App">
      <Switch>
        <Route >
          <Navbar changeColor={changeColor} />
          </Route>
      </Switch>

      <Banner
        image={images.logo_banner_mono}
        imageAlt="Logotipo Soy Juanjo Hernández"
        title="Soy Juanjo Hernández, desarrollador frontend."
      />

      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
