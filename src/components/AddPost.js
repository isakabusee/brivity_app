import React, { useState, useEffect } from "react";
import { FormInput, TextArea, Button } from "./Styles";
import axios from "axios";
import { BASE_URL } from "../constants";
import { isUserLoggedIn } from "../cookie-helper";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const inputsNotEmpty = title !== "" && body !== "";

  useEffect(() => {
    console.log("in useEffect");
    isUserLoggedIn();
  }, []);

  const createPost = async () => {
    if (inputsNotEmpty) {
      try {
        const data = {
            post: {title: title, body: body}  
        };
        const response = await axios.post(`${BASE_URL}/posts`, data);
         
        console.log(response, "response from created post");
      } catch (errors) {
        console.log(errors, "errors");
      }
    } else {
      alert("You can't leave this field empty!");
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);
    if (name === "title") {
      setTitle(value);
    }
    if (name === "body") {
      setBody(value);
    }
  };
  return (
    <div>
      <h1>New post</h1>
      <FormInput
        placeholder="title"
        value={title}
        name="title"
        onChange={handleChange}
      />
      <br />
      <TextArea
        placeholder="body"
        value={body}
        name="body"
        onChange={handleChange}
      />
      <br />
      <Button onClick={createPost} disabled={!inputsNotEmpty}>
        Submit
      </Button>
    </div>
  );
};

export default AddPost;
