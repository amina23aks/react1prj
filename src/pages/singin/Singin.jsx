// src/pages/singin/Singin.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './singin.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in attempted with data:", formData);
    fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  

    // Assuming sign-in is successful, navigate to the home page
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Sign in</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignUpForm;
