import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/auth/signup', form).then(() => navigate('/login'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <input className="form-control my-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input className="form-control my-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn btn-primary">Signup</button>
    </form>
  );
}

export default Signup;
