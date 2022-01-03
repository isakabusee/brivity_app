import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { mockData } from "../mockData";
import DeletePost from "./DeletePost";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { BASE_URL } from "../constants";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [postComments, setPostComments] = useState([]);
  const { id } = useParams();

  const getPostDetails = async () => {
    // Make API Call
    // /posts/post_id
    try {
      const res = await axios.get(`${BASE_URL}/posts/${id}`);
      if (res.data) setPostDetail(res.data.post);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const getPostComments = async () => {
    // /posts/post_id/comments
    try {
      const res = await axios.get(`${BASE_URL}/posts/${id}/comments`);
        if (res.data) setPostComments(res.data.comments);
      console.log(res.data, "these are comments");
    } catch (e) {
      console.log(e, "error");
    }
  };

  useEffect(() => {
    getPostDetails();
    getPostComments();
  }, []);

  return (
    <div>
      <h1>{postDetail.title}</h1>
      <p>{postDetail.body}</p>
      <h3>
        <Link to={`/edit/${postDetail.id}`}>Edit Post</Link>
        <DeletePost postId={id} />
      </h3>
      <AddComment postId={id} />
      <Comments comments={postComments} />
    </div>
  );
};

export default PostDetail;
