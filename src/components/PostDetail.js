import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { mockData } from '../mockData';
import Comment from './Comment';

const PostDetail = () => {
    const [post, setPost] = useState({});
        const { id } = useParams();

    const filterSelectedPost = (postId) => mockData.posts.find(x => x.id === postId);

    useEffect(() => {
        const selectedPost = filterSelectedPost(Number(id));
        console.log(selectedPost, 'selectedPost');
        setPost(selectedPost);
    }, []);

    return (
        <div>
        <h1>{post.title}</h1>
         <p>{post.body}</p>
         <h3>
         <Link to={`/edit/${post.id}`}>
         Edit Post
         </Link>
         </h3>
         <Comment postId={id} />
        </div>
    )
}

export default PostDetail
