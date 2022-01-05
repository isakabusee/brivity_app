import React, { useState, useEffect } from "react";
import { FormInput, TextArea, Button } from './Styles';
import axios from "axios";
import { BASE_URL } from "../constants";
import { isUserLoggedIn } from "../cookie-helper";

const Comment = ({ postId }) => {

    const [comment, setComment] = useState("");
    const inputsNotEmpty = comment !== "";

    useEffect(() => {
        isUserLoggedIn();
    }, []);

    const createComment = async () => {
        if(inputsNotEmpty) {
            try {
                const data = {
                    comment: {post_id: postId, comment: comment }
                };
                const response = await axios.post(`${BASE_URL}/comments`, data)
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
