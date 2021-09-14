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
                    <button onClick={() => PostDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

function PostDelete(postid) {
    fetch('http://localhost:9999/posts/' + postid, {
        method: 'DELETE'

    }).then(() => {
        console.log('Post deleted');
        window.location.reload();
    })

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