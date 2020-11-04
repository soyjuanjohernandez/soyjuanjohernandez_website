import React, { useEffect, useState } from "react";
import "./posts.css";
import { fs } from "../../js/config/configFirebase";

const Posts = (props) => {
  const {showPost} = props;
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    fs.collection("post").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPosts(docs);

    });
  };

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
          <img src={post.mainImage} alt={post.postTitle} />
          <p>{`${post.postDescription}`}</p>
        </div>
      ))}
    </section>
  );
};

export default Posts;
