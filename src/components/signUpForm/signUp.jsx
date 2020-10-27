import React, { useState } from "react";
import "./signUp.css";

import Modal from "../modal/modal";

const SignUpForm = (props) => {

  const { onCloseModal, isOpen, addUser } = props;

  const initialStateValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log( name, value)
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values)
    addUser(values);
    onCloseModal()
  };

  

  return (
    <Modal onClose={onCloseModal} isOpen={isOpen}>
      <h3>Registrarse</h3>
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
        <br/>
        <br/>
        <button>Save</button>
      </form>
    </Modal>
  );
};
export default SignUpForm;
