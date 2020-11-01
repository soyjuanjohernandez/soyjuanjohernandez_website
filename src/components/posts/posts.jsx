import React, { useEffect, useState } from "react";
import "./posts.css";
import { fs } from "../../js/config/configFirebase";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    fs.collection("post").onSnapshot((querySnapshot) => {
      console.log("el snapshot", querySnapshot.docs);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: docs.id });
      });
      setPosts(docs);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log("esta es la data de los post", posts.title);

  return (
    <section className="posts" >
      {posts.map((post) => (
        <div className="posts__post" id={post.id}>
          <h1>{post.title}</h1>
          <img src={post.img} alt="post.title" />
          <p>{post.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Posts;
