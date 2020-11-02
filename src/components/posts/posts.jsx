import React, { useEffect, useState } from "react";
import "./posts.css";
import { fs } from "../../js/config/configFirebase";

const Posts = (props) => {
  const {showPost} = props;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    fs.collection("post").onSnapshot((querySnapshot) => {
      // console.log("el snapshot", querySnapshot.docs);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log("el snapshot", docs);
      setPosts(docs);

    });
  };

  console.log("el snapshot posts", posts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="posts">
      {posts.map((post) => (
        <div
          className="posts__post"
          id={post.id}
          key={post.id}
          onClick={() => showPost(post.id, post)}
        >
          <h2>{post.postTitle}</h2>
          <img src={post.mainImage} alt={post.postTitle} />
          <p>{post.postDescription}</p>
        </div>
      ))}
    </section>
  );
};

export default Posts;
