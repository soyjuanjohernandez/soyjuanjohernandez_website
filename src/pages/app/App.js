import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import images from "../../assets/images/images";

import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import About from "../../components/about/About";
import Pojects from "../../components/projects/Projects";
// import Banner from './components/banner/Banner'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Navbar} />
      </Switch>

      <Banner
        image={images.logo_banner_mono}
        imageAlt="Logotipo Soy Juanjo Hernández"
        title="Soy Juanjo Hernández, desarrollador frontend."
      />

      <About />
      <Pojects />
      
      <section id="contact">
        <h1>Contactame</h1>
      </section>


    </div>
  );
}

export default App;
