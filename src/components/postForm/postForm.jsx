import React, { useState } from "react";
import "./postForm.css";

const PostForm = (props) => {
  const {  addUser } = props;
  
  const initialStateValues = {
    postTitle: "",
    postContent: "",
  };
  const [values, setValues] = useState(initialStateValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(values);
    setValues({ ...initialStateValues });
  };

  return (
    <section className="post-form">
      <h3>Crear post</h3>
      <form action="" onSubmit={handleSubmit} className="post-form__form">
        <input
          type="text"
          name="postTitle"
          placeholder="titulo del post"
          value={values.postTitle}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="postContent"
          placeholder="Inserte su contenido en markdown"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        {/* <br />

        <br />
        <input
          type="text"
          name="password"
          placeholder="Digite la contraseña"
          value={values.password}
          onChange={handleInputChange}
          required
        /> */}
       
        <button>Save</button>
      </form>
    </section>
  );
};
export default PostForm;
