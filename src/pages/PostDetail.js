import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function PostDetail() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/posts/${id}`).then(res => setPost(res.data));
  }, [id]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p><em>By {post.username}</em></p>
      <hr />
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
