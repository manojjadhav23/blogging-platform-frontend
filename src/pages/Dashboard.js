import React, { useEffect, useState } from 'react';
import api from '../api';

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts/mine').then(res => setPosts(res.data));
  }, []);

  const deletePost = (id) => {
    api.delete(`/posts/${id}`).then(() => setPosts(posts.filter(p => p.id !== id)));
  };

  return (
    <>
      <h3>My Posts</h3>
      {posts.map(post => (
        <div key={post.id} className="card my-2">
          <div className="card-body">
            <h5>{post.title}</h5>
            <button className="btn btn-danger btn-sm" onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
