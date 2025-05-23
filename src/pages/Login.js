import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    api.post('/auth/login', form).then(res => {
      localStorage.setItem('token', res.data.token);
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input className="form-control my-2" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="form-control my-2" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login;
