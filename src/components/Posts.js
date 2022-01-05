import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import { getAuthToken, Logout } from "../cookie-helper";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fetchAllPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/posts`);
      if (res.data) setAllPosts(res.data.posts);
      console.log(res.data, "results from posts fetch");
    } catch (e) {
      console.log(e, "error");
    }
  };

  useEffect(() => {
    const token = getAuthToken();
    console.log(token, "token");
    if (token !== null) setIsLoggedIn(true);
    fetchAllPosts();
  }, []);

  console.log(allPosts, "allPosts");
  if (!allPosts) return "Posts coming soon...";
  return (
    <>
      <h4>
        {isLoggedIn ? (
          <div onClick={() => Logout()}>Logout</div>
        ) : (
          <Link to={`/login`}>Login</Link>
        )}
      </h4>

      <Link to="/new">
        <h1>Add New Post</h1>
      </Link>
      {allPosts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;