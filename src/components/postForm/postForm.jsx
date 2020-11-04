import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./postForm.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PostForm = (props) => {
  const gfm = require("remark-gfm");
  const { addPost } = props;

  const initialStateValues = {
    postTitle: "",
    mainImage: "",
    postDescription: "",
    postContent: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(values);
    setValues({ ...initialStateValues });
  };

  const Component = ({ value, language }) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={coldarkDark}>
        {value ?? ""}
      </SyntaxHighlighter>
    );
  };

  return (
    <section className="post-form">
      <h3>Crear post</h3>
      <div className="post-form__content">
        <form action="" onSubmit={handleSubmit} className="post-form__form">

          <input
            type="text"
            name="postTitle"
            placeholder="titulo del post"
            value={values.postTitle}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="postDescription"
            placeholder="Descripcion corta del post"
            value={values.postDescription}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="mainImage"
            placeholder="url de la imagen principal"
            value={values.mainImage}
            onChange={handleInputChange}
            required
          />

          <textarea
            name="postContent"
            placeholder="Inserte su contenido en markdown"
            value={values.postContent}
            onChange={handleInputChange}
            required
            autoFocus
          />

          <button>Save</button>

        </form>

        <ReactMarkdown
          source={values.postContent}
          plugins={[gfm]}
          className="post-form__markdown"
          renderers={{ code: Component }}
        />

      </div>
    </section>
  );
};
export default PostForm;
