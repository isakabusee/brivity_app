import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockData } from '../mockData';
import { FormInput, TextArea, Button } from './Styles';
import { getAuthToken } from '../cookie-helper';
import axios from 'axios';
import { BASE_URL } from '../constants';

const DeletePost = () => {
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

    const deletePost = async () => {
        const authToken = getAuthToken();
        // Send axios with Auth Token
            try {
                const data = {
                    post: { title: title, body: body },
                };
                const response = await axios.delete(`${BASE_URL}/posts/:id`, data, {
                    headers: {
                        'Authorization': authToken
                    },
                });
            } catch (errors) {
                console.log(errors, "errors");
            }
    };

    // const handleTextChange = (e) => {
    //     const { value, name } = e.target;
    //     console.log(value);
    //     if (name === 'title') {
    //         setTitle(value);
    //     }
    //     if (name === 'content') {
    //         setBody(value);
    //     }
    // }

    return (
        <div>
            <h1>delete post</h1>

            <Button onClick={deletePost} disabled={!inputsNotEmpty}><Link to={`/post/${post.id}`}>Delete</Link></Button>
        </div>
    )
}

export default DeletePost;
