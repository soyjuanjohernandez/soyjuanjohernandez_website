import React from "react";
import images from "../../assets/images/images";
import "./contact.css";

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <img
        className="contact__logo"
        src={images.logo_footer_mono}
        alt="Logotipo footer"
        title="Logotipo footer"
      />

      <p>
        No dudes en escribirme: <br />
        <br />
        <a href="mailto: soyjuanjohernandez@gmail.com" target="_blank" rel="noopener noreferrer">
          soyjuanjohernandez@gmail.com
        </a>
      </p>

      <div className="contact__social">
        <a href="https://twitter.com/soyjuanjoh/" target="_blank" rel="noopener noreferrer">
          <img
            className="contact__twitter"
            src={images.twitter_white}
            alt="Logotipo twitter"
            title="Twitter"
          />
        </a>
        <a href="https://www.instagram.com/soyjuanjohernandez/" target="_blank" rel="noopener noreferrer">
          <img
            className="contact__instagram"
            src={images.instagram_white}
            alt="Logotipo instagram"
            title="Instagram"
          />
        </a>
        <a href="https://github.com/soyjuanjohernandez/" target="_blank" rel="noopener noreferrer">
          <img
            className="contact__github"
            src={images.github_white}
            alt="Logotipo Github"
            title="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/soyjuanjohernandez/" target="_blank" rel="noopener noreferrer">
          <img
            className="contact__linkedin"
            src={images.linkedin_white}
            alt="Logotipo linkedin"
            title="Linkedin"
          />
        </a>
      </div>

      <p>- 2020 -</p>
    </section>
  );
};

export default Contact;
