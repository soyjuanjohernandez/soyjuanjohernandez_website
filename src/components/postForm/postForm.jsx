import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./postForm.css";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, tomorrow, coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostForm = (props) => {
  const {  addPost } = props;

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
    addPost(values);
    setValues({ ...initialStateValues });
  };


const Component = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={coldarkDark}>
      {value ?? ''}
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
      <ReactMarkdown source={values.postContent} className="post-form__markdown" renderers={{code: Component,}} />
      </div>
    </section>
  );
};
export default PostForm;
