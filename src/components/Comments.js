import React, { useState } from "react";
import { FormInput, TextArea, Button } from "./Styles";
import axios from "axios";
import { BASE_URL } from "../constants";
import { getAuthToken } from "../cookie-helper";

const Comments = ({ comments }) => {
  console.log(comments, "postComments");
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.content}>
          <p>{comment.content}</p>
          <h5>By: {comment.user.display_name}</h5>
        </div>
      ))}
    </div>
  );
};

export default Comments;
