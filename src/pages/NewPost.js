import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function NewPost() {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/posts', form).then(() => navigate('/dashboard'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Post</h3>
      <input className="form-control my-2" placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea className="form-control my-2" rows="10" placeholder="Content" onChange={e => setForm({ ...form, content: e.target.value })}></textarea>
      <button className="btn btn-success">Publish</button>
    </form>
  );
}

export default NewPost;
