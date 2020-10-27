import React from "react";
import "./signin.css";

import Modal from "../modal/modal"

const SignInForm = (props) => {
  const { onClose, isOpen } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
    <h3>Ingresar</h3>
    <form action="">
      <input type="text" placeholder="place holder del input"/>
      <br/>
      
      <br/>
      <input type="text" placeholder="place holder del input"/>
    </form>
    </Modal>
  )
};
export default SignInForm;
