import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <>
      <h2>All Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="card my-3">
          <div className="card-body">
            <h5>{post.title}</h5>
            <p>{post.content.substring(0, 100)}...</p>
            <small>By {post.username}</small><br />
            <Link to={`/post/${post.id}`} className="btn btn-link">Read more</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Home;
