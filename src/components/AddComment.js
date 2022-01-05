import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormInput, TextArea, Button } from './Styles';
import axios from "axios";
import { BASE_URL } from "../constants";
import { getAuthToken, Logout } from "../cookie-helper";

const Comment = ({ postId }) => {

    const [comment, setComment] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const inputsNotEmpty = comment !== "";

    useEffect(() => {
        const token = getAuthToken();
        console.log(token, "token");
        if (token !==null) setIsLoggedIn(true);
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
             <h4>
             {isLoggedIn ? (
                 <div onClick={() => Logout()}>Logout</div>) : (
                     <Link to={`/login`}>Login</Link>
                     )}
            </h4>
            <h1>New Comment</h1>

            <TextArea placeholder="comment" value={comment} name="comment" onChange={handleChange}/><br/>
            <Button onClick={createComment} disabled={!inputsNotEmpty}>Submit</Button>
        </div>

    )
}

export default Comment;
