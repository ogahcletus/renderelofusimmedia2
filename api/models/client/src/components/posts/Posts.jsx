import Post from "../post/Post";
import "./posts.css";

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



