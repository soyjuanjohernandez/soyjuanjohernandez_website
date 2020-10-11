import React from "react";
import Button from "../button/Button";
import "./projectCard.css";

const ProjectCard = (props) => {
  const {
    cardTitle,
    image,
    imageTech1,
    imageTech2,
    imageTech3,
    imageTech4,
    imageAlt,
    imageAltTech1,
    imageAltTech2,
    imageAltTech3,
    imageAltTech4,
    title,
    titleTech1,
    titleTech2,
    titleTech3,
    titleTech4,
    infoText,
    buttonText,
    urlProject,
    buttonType
  } = props;

  return (
    <div className="project-card" id="project-card">
      <h3>{cardTitle}</h3>

      <img src={image} alt={imageAlt} title={title} className />

      <div className="project-card__techs">
        <img
          src={imageTech1 || null}
          alt={imageAltTech1 || null}
          title={titleTech1 || null}
          className="project-card__logo-tech"
        />
        <img
          src={imageTech2 || null}
          alt={imageAltTech2 || null}
          title={titleTech2 || null}
          className="project-card__logo-tech"
        />
        <img
          src={imageTech3 || null}
          alt={imageAltTech3 || null}
          title={titleTech3 || null}
          className="project-card__logo-tech"
        />
        <img
          src={imageTech4 || null}
          alt={imageAltTech4 || null}
          title={titleTech4 || null}
          className="project-card__logo-tech"
        />
      </div>

      <div className="project-card__info" title="Project info">
        <p>{infoText}</p>
      
          <Button value={buttonText} type={buttonType} url={urlProject}/>
        
      </div>
    </div>
  );
};

export default ProjectCard;
