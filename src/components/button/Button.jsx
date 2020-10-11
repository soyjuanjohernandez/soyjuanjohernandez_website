import React from "react";
import "./button.css";

const Button = ({ value, id, onClick, type, url }) => (
    <a href={url || null} target="_blank">
      <button
        type="button"
        className={`button button--${type}`}
        id={id || null}
        onClick={onClick || null}
      >
        {value || "Aceptar"}
      </button>
    </a>
);

export default Button;
