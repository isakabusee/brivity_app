import React, { useState } from "react";
import { FormInput, TextArea, Button } from './Styles';
import axios from "axios";
import { BASE_URL } from "../constants";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const inputsNotEmpty = title !== "" && body !== "";

    const createPost = async () => {
        if(inputsNotEmpty) {
            try {
                const data = {
                    post: { title: title, body: body },
                };
                const response = await axios.post(`${BASE_URL}/posts`, data);
                console.log(response, "response from created comment");
            } catch (errors) {
                console.log(errors, "errors");
            }
        } else {
            alert("You not leave this field empty!");
        }
    };
    
    const handleChange  = (e) => {
        const { value, name } = e.target;
        console.log(value)
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'body') {
            setBody(value);
        }
    }
    return(
         <div>
            <h1>New post</h1>
            <FormInput placeholder="title" value={title} name="title" onChange={handleChange} /><br/>
            <TextArea placeholder="body" value={body} name="body" onChange={handleChange}/><br/>
            <Button onClick={createPost} disabled={!inputsNotEmpty}>Submit</Button>
        </div>

    )
}

export default AddPost;
