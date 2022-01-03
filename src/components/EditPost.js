import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockData } from '../mockData';
import { FormInput, TextArea, Button } from './Styles';
import { getAuthToken } from '../cookie-helper';
import axios from 'axios';
import { BASE_URL } from '../constants';

const EditPost = () => {
        const [post, setPost] = useState({});
        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const { id } = useParams();
        const inputsNotEmpty = title !== "" && body !== "";

    const filterSelectedPost = (postId) => mockData.posts.find(x => x.id === postId);



    useEffect(() => {
        const selectedPost = filterSelectedPost(Number(id));
        console.log(selectedPost, 'selectedPost');
        setTitle(selectedPost.title);
        setBody(selectedPost.body);
        setPost(selectedPost);
    }, []);

    const submitEditedPost = async () => {
        const authToken = getAuthToken();
        // Send axios with Auth Token
        if(inputsNotEmpty) {
            try {
                const data = {
                    post: { title: title, body: body },
                };
                const response = await axios.patch(`${BASE_URL}/posts/:id`, data, {
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
        if (name === 'title') {
            setTitle(value);
        }
        if (name === 'body') {
            setBody(value);
        }
    }

    return (
        <div>
            <h1>Edit post</h1>
            <FormInput placeholder='title' name="title" value={title} onChange={handleTextChange} /><br/>
            <TextArea placeholder='body' name="body" value={body} onChange={handleTextChange} /><br />
            <Button onClick={submitEditedPost} disabled={!inputsNotEmpty}><Link to={`/post/${post.id}`}>Save Changes</Link></Button>
        </div>
    )
}

export default EditPost;
