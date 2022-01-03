import React, { useState } from "react";
import { FormInput, TextArea, Button } from './Styles';
import axios from "axios";
import { BASE_URL } from "../constants";

const Comment = () => {

    const [comment, setComment] = useState("");
    const inputsNotEmpty = comment !== "";

    const createComment = async () => {
        if(inputsNotEmpty) {
            try {
                const data = {
                    comment: { comment: comment },
                };
                const response = await axios.post(`${BASE_URL}/comments`, data);
                console.log(response, "response from created comment");
            } catch (errors) {
                console.log(errors, "errors");
            }
        } else {
            alert("You can't leave this field empty!");
        }
    };
    
    const handleChange  = (e) => {
        const { value, name } = e.target;
        console.log(value)
        if (name === 'comment') {
            setComment(value);
        }
    }
    return(
         <div>
            <h1>New Comment</h1>

            <TextArea placeholder="comment" value={comment} name="comment" onChange={handleChange}/><br/>
            <Button onClick={createComment} disabled={!inputsNotEmpty}>Submit</Button>
        </div>

    )
}

export default Comment;
