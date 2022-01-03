import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockData } from '../mockData';
import { FormInput, TextArea, Button } from './Styles';
import { getAuthToken } from '../cookie-helper';
import axios from 'axios';
import { BASE_URL } from '../constants';

const EditComment = () => {
        const [comment, setComment] = useState({});
        const [content, setContent] = useState('');
        const [body, setBody] = useState('');
        const { id } = useParams();
        const inputsNotEmpty = content !== "" && body !== "";

    const filterSelectedComment = (commentId) => mockData.comments.find(x => x.id === commentId);



    useEffect(() => {
        const selectedComment = filterSelectedComment(Number(id));
        console.log(selectedComment, 'selectedComment');
        setContent(selectedComment.content);
        setBody(selectedComment.body);
        setComment(selectedComment);
    }, []);

    const submitEditedComment = async () => {
        const authToken = getAuthToken();
        // Send axios with Auth Token
        if(inputsNotEmpty) {
            try {
                const data = {
                    comment: { content: content, body: body },
                };
                const response = await axios.patch(`${BASE_URL}/comment/:id`, data, {
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

    const handleTextChange = (e) => {
        const { value, name } = e.target;
        console.log(value);
        if (name === 'content') {
            setContent(value);
        }
    }

    return (
        <div>
            <h1>Edit Comment</h1>
            {/* <FormInput placeholder='content' name="content" value={content} onChange={handleTextChange} /><br/> */}
            <TextArea placeholder='content' name="content" value={content} onChange={handleTextChange} /><br />
            <Button onClick={submitEditedComment} disabled={!inputsNotEmpty}><Link to={`/comment/${comment.id}`}>Save Changes</Link></Button>
        </div>
    )
}

export default EditComment;
