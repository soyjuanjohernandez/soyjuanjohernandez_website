import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import images from "./assets/images/images";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
// import Banner from './components/banner/Banner'

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route component={Navbar} />
      </Switch>
      <Banner image={images.logo_banner_mono}
      imageAlt="Logotipo Soy Juanjo Hernández"
      title="Soy Juanjo Hernández, desarrollador frontend." 
      />
      <section id="about">
        <h1>about</h1>
      </section>
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <section id="blog">
        <h1>Blog</h1>
      </section>
      .
    </div>
  );
}

export default App;
