import React, { useEffect, useState } from "react";
import "./postDetail.css";
import images from "../../assets/images/images";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PostDetail = (props) => {
  const gfm = require("remark-gfm");
  const { postDetailDataSend, handleClose } = props;
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    // const htmlElement = document.documentElement;
    // let elementAtrib = htmlElement.getAttribute("data-theme");
    // if (elementAtrib === "dark") {
    //   document.querySelector(".post-detail__button-back img").src =
    //     images.arrow;
    // } else {
    //   document.querySelector(".post-detail__button-back img").src =
    //     images.arrow_dark;
    // }
  }, []);
  const Component = ({ value, language }) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={coldarkDark}>
        {value ?? ""}
      </SyntaxHighlighter>
    );
  };

  return (
    <section className="post-detail">
      <input type="text" autoFocus className="post-detail__input-focus" />
      <div className="post-detail__button-back-container" title="Ir atrás">
        <button onClick={handleClose} className="post-detail__button-back">
          <img
            src={images.arrow}
            alt="Atrás"
            className="post-detail__button-back-arrow"
          />
        </button>
      </div>
      <ReactMarkdown
        source={postDetailDataSend}
        plugins={[gfm]}
        className="post-form__markdown-detail"
        renderers={{ code: Component }}
      />
    </section>
  );
};

export default PostDetail;
