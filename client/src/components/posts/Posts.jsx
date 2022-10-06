import Post from "../post/Post";
import "./posts.css";
import React from 'react';

export default function Posts({ posts }) {
  
  posts = Array.from(posts)
  
 
 
  
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}



