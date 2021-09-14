//import { Component } from 'react';
import React from 'react'
import { useState, useEffect } from "react";

const ListPost = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div className="post" key={post.id} >
                    <h2 className="Title">{post.title}</h2>
                    <p>Msg: {post.body}</p>
                </div>
            ))}
        </div>
    );
}
const PostFetch = () => {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
        fetch('http://localhost:9999/posts')
            .then(res => {
                return res.json();
            })
            .then(resdata => {
                console.log(resdata)
                setPosts(resdata);
            })
    }, [])
    return (
        <div>
            {posts && <ListPost posts={posts} />}
        </div>
    );
}
export default PostFetch