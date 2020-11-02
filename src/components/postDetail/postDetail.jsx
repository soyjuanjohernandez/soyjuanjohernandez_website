import React, { useEffect, useState } from "react";
import "./postDetail.css";
import { fs } from "../../js/config/configFirebase";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PostDetail = (props) => {
  const gfm = require("remark-gfm");
  const { postDetailDataSend,handleClose } = props;
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    // getPosts();
  }, []);

  // postDetailDataSend && setpostData({postDetailDataSend}) 
  // const data = postDetailDataSend[0].postContent
  const Component = ({ value, language }) => {
    return (
      <SyntaxHighlighter language={language ?? null} style={coldarkDark}>
        {value ?? ""}
      </SyntaxHighlighter>
    );
  };

  return (
    <section className="post-detail">
      <button onClick={handleClose}>X</button>
      <h1>{console.log(postDetailDataSend[0].postTitle)}</h1>
      <ReactMarkdown
        source={postDetailDataSend}
        plugins={[gfm]}
        className="post-form__markdown"
        renderers={{ code: Component }}
      />

      {/* <div
          className="posts__post"
          id={post.id}
          key={post.id}

        >
          <h1>{post.title}</h1>
          <img src={post.img} alt={post.title} />
          <p>{post.description}</p>
        </div> */}
    </section>
  );
};

export default PostDetail;
