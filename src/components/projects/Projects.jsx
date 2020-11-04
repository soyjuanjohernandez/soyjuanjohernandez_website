import React from "react";
import "./projects.css";
import images from "../../assets/images/images";
import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {
  const { html, sass, react, web_components, webpack, js, css } = images;

  return (
    <section className="projects" id="projects">
      <div className="projects__title">
        <img src={images.projects} alt="Proyectos" title="Proyectos" />
      </div>

      <div className="projects__cards">
        <ProjectCard
          cardTitle="Social media dashboard"
          image={images.social_dashboard}
          imageAlt="Social media dashboard poject"
          title="social media dashboard"
          imageTech1={html}
          imageAltTech1="html"
          titleTech1="html"
          imageTech2={sass}
          imageAltTech2="sass"
          titleTech2="sass"
          imageTech3={js}
          imageAltTech3="JS"
          titleTech3="Javascript"
          imageTech4={web_components}
          imageAltTech4="web components"
          titleTech4="web components"
          infoText="Este dashboard puede cambiar el color del tema. Está construido con
         HTML, SASS, JavaScript y Web Components."
          urlProject="https://soyjuanjohernandez.github.io/social_media_dashboard/"
          buttonText="Ver proyecto"
          buttonType="html"
        />
        <ProjectCard
          cardTitle="Product card"
          image={images.product_card}
          imageAlt="Product card poject"
          title="Product card"
          imageTech1={html}
          imageAltTech1="html"
          titleTech1="html"
          imageTech2={css}
          imageAltTech2="css"
          titleTech2="css"
          imageTech3={js}
          imageAltTech3="JS"
          titleTech3="Javascript"
          infoText="Puede cambiarse el color del producto a través de los botones de colores en la parte inferior.\n
         Está construido con HTML, CSS y JavaScript.
         "
          urlProject="https://soyjuanjohernandez.github.io/clase-de-CSS-product-card/"
          buttonText="Ver proyecto"
          buttonType="css"
        />

        <ProjectCard
          cardTitle="Ourclothe"
          image={images.ourclothe}
          imageAlt="Ourclothe poject"
          title="Ourclothe"
          imageTech1={react}
          imageAltTech1="React.js"
          titleTech1="React"
          imageTech2={sass}
          imageAltTech2="sass"
          titleTech2="sass"
          imageTech3={webpack}
          imageAltTech3="webpack"
          titleTech3="Webpack"
          infoText="App inspirada en Tinder enfocada en intercambiar ropa.
          A demás de del frontend, también trabajé en el diseño y el prototipo en adobe XD.
          Está contruida con React.js, SASS y Webpack principalmente.
         "
          urlProject="https://github.com/ArzateCompany/finalProjectPlatziMaster"
          buttonText="Ir al repositorio"
          buttonType="node"
        />
        <ProjectCard
          cardTitle="Lookemall"
          image={images.lookemall}
          imageAlt="Lookemall poject"
          title="Lookemall"
          imageTech1={react}
          imageAltTech1="React.js"
          titleTech1="React"
          imageTech2={sass}
          imageAltTech2="sass"
          titleTech2="sass"
          imageTech3={webpack}
          imageAltTech3="webpack"
          titleTech3="Webpack"
          infoText="Esta app fue creada como una pokedex que se usa para mostrar y buscar pokemons. En la app se puede filtrar entre los más fuertes y los más débiles
          Está construido con React, SASS, Webpack, React router entre otros."
          urlProject="https://www.notion.so/Frontend-5cb408f8eceb4d809c3ed4625d75f240"
          buttonText="Documentación"
          buttonType="html"
        />
      </div>
    </section>
  );
};

export default Projects;
