import React, { useState } from "react";
import "./signin.css";

import Modal from "../modal/modal";

const SignInForm = (props) => {
  const { onCloseModal, isOpen, loginUser } = props;

  const initialStateValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values);
    setValues({ email: "", password: "" });
  };

  return (
    <Modal onClose={onCloseModal} isOpen={isOpen}>
      <h3>Ingresar</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Inserte su email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Digite la contraseña"
          value={values.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button>Entrar</button>
      </form>
    </Modal>
  );
};
export default SignInForm;
