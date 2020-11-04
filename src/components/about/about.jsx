import React from "react";
import images from "../../assets/images/images";
import "./about.css";

const About = (props) => {
  const { children } = props;
  
  return (
    <section className="about" id="about">
      <div className="about__title">
        <img
          src={images.about}
          alt="Sobre mi"
          title="Sobre mi"
          className="about__title-image"
        />
      </div>
      <div className="about__face-image">
        <img
          src={images.face}
          alt="Soy juanjo hernandez rostro"
          title="Soy Juanjo Hernández rostro creativo."
        />
      </div>
      <div className="about__text" title="Sobre mi texto.">
        <p>
          Hola! <br />
          <br />
          Soy desarrollador frontend, Tecnólogo en producción de multimedia del SENA y estudiante del programa Platzi Master en Platzi. <span role="img" aria-label="emoji"> 👨‍💻</span>.
        </p>
        <p>
        Cuento con la capacidad de diseñar y crear todo lo relacionado con sitios y aplicaciones web. Implemento HTML, CSS, Javascript, React.js, firebase, webpack entre otros.  <span role="img" aria-label="emoji"> 🚀. </span>.
        </p>
        <p>
          Me gusta aprender algo nuevo constantemente, pienso que la creatividad
          y la innovación se fortalecen con un conocimiento cosmopolita y
          multicultural <span role="img" aria-label="emoji">  🎎</span>.
        </p>
        <p>
          Me gusta la música en general, especialmente el rock , la
          música clásica y el jazz. Estudié música y suelo tocar la guitarra,
          algunas veces guitarra clásica y otras la guitarra eléctrica <span role="img" aria-label="emoji"> 🤘</span>.
        </p>
        {/* <p>
          Me apasiona y maravilla la capacidad que tiene el desarrollo de
          software de cambiar el mundo y  llevar a la humanidad a nuevos
          horizontes, como el planeta marte por ejemplo <span role="img" aria-label="emoji"> 👩‍🚀</span>.
        </p> */}
        {children}
      </div>
      
    </section>
  );
};

export default About;
