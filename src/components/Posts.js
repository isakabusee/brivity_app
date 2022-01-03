import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [mockPosts, setMockPosts] = useState({"posts":[{"id":1,"title":"Test Post","body":"Lorem ipsum...","created_at":"2021-11-23T14:51:50.435Z","updated_at":"2021-11-23T14:51:50.435Z","comment_count":1,"user":{"id":1,"display_name":"Rocky"}}],"meta":{"current_page":1,"per_page":30,"total_entries":1}})
  const [singlePost, setSinglePost] = useState({"post":{"id":1,"title":"Test Post","body":"Lorem ipsum...","created_at":"2021-11-23T14:51:50.435Z","updated_at":"2021-11-23T14:51:50.435Z","comment_count":1,"user":{"id":1,"display_name":"Rocky"}}})
  const [postComment, setPostComment] = useState({"comments":[{"id":1,"content":"My interesting thought on your post...","created_at":"2021-11-23T14:53:04.881Z","updated_at":"2021-11-23T14:53:04.881Z","user":{"id":2,"display_name":"Rocky"}}],"meta":{"current_page":1,"per_page":30,"total_entries":1}})

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
    fetchAllPosts();
  }, []);

  console.log(allPosts, "allPosts");
  if (!allPosts) return "Posts coming soon...";
  return (
    <>
    <h4><Link to={`/login`}>Login</Link></h4>


    <Link to="/new"><h1>Add New Post</h1></Link>
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
