import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts`);
      if (res.data) setAllPosts(res.data.posts);
      console.log(res.data.posts, "results from posts fetch");
    } catch (e) {
      console.log(e, "error");
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log(allPosts, "allPosts");
  if (!allPosts) return "Posts coming soon...";
  return (
    <>
      {allPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
