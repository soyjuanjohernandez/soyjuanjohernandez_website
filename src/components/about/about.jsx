import React from "react";
import images from "../../assets/images/images";
import "./about.css";

const About = (props) => {
  const { children } = props;

  return (
    <section className="about" id="about">
      <div className="about__title">
        <img src={images.about} alt="Sobre mi" title="Sobre mi" />
      </div>
      <div className="about__text" title="Sobre mi texto.">
        <p>
          Hola! <br />
          <br />
          Soy Juan José, desarrollador frontend, Tecnólogo en producción de
          multimedia del SENA y estudiante activo en Platzi Master 👨‍💻.
        </p>
        <p>
          Me gusta aprender algo nuevo constantemente, pienso que la creatividad
          y la innovación se fortalecen con un conocimiento cosmopolita y
          multicultural 🎎.
        </p>
        <p>
          También me gusta la música en general, especialmente el rock , la
          música clásica y el jazz. Estudié música y suelo tocar la guitarra,
          algunas veces clásica y otras la eléctrica 🤘.
        </p>
        <p>
          Me apasiona y maravilla la capacidad que tiene el desarrollo de
          software de cambiar el mundo y para llevar a la humanidad a nuevos
          horizontes, como el planeta marte por ejemplo 👩‍🚀.
        </p>
        {children}
      </div>
      <div className="about__face-image">
        <img
          src={images.face}
          alt="Soy juanjo hernandez rostro"
          title="Soy Juanjo Hernández rostro creativo."
        />
      </div>
    </section>
  );
};

export default About;
