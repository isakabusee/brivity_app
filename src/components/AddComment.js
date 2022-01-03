import React, { useState } from "react";
import { FormInput, TextArea, Button } from './Styles';
import axios from "axios";
import { BASE_URL } from "../constants";
import { getAuthToken } from "../cookie-helper";

const Comment = ({ postId }) => {

    const [comment, setComment] = useState("");
    const inputsNotEmpty = comment !== "";

    const createComment = async () => {
        const authToken = getAuthToken();
        if(inputsNotEmpty) {
            try {
                const data = {
                    "comment": {"post_id": postId, "content": comment }
                };
                const response = await axios.post(`${BASE_URL}/comments`, data, {
                    headers: {
                        'Authorization': authToken
                    },
                });
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
