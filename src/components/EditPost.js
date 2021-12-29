import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockData } from '../mockData';
import { FormInput, TextArea, Button } from './Styles';

const EditPost = () => {
        const [post, setPost] = useState({});
        const [postTitle, setPostTitle] = useState('');
        const [postBody, setPostBody] = useState('');
        const { id } = useParams();

    const filterSelectedPost = (postId) => mockData.posts.find(x => x.id === postId);

    useEffect(() => {
        const selectedPost = filterSelectedPost(Number(id));
        console.log(selectedPost, 'selectedPost');
        setPostTitle(selectedPost.title);
        setPostBody(selectedPost.body);
        setPost(selectedPost);
    }, []);

    const handleTextChange = (e) => {
        const { value, name } = e.target;
        console.log(value);
        if (name === 'title') {
            setPostTitle(value);
        }
        if (name === 'content') {
            setPostBody(value);
        }
    }

    return (
        <div>
            <h1>Edit post</h1>
            <FormInput name="title" value={postTitle} onChange={handleTextChange} /><br/>
            <TextArea name="content" value={postBody}  onChange={handleTextChange} /><br />
            <Button><Link to={`/post/${post.id}`}>Save Changes</Link></Button>
        </div>
    )
}

export default EditPost;
