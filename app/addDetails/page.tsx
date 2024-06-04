"use client"
// components/UserForm.js

// components/UserForm.js
import { useState } from 'react';

const UserForm = ({ onSubmit }:{onSubmit :any}) => {
  const [user, setUser] = useState({
    bio: '',
    name: '',
    role: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>User Form</h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }} htmlFor="bio">Bio</label>
          <input
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}
            id="bio"
            type="text"
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }} htmlFor="name">Name</label>
          <input
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}
            id="name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4a5568' }} htmlFor="role">Role</label>
          <input
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #cbd5e0' }}
            id="role"
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div>
        
        <button
          type="submit"
          style={{ backgroundColor: '#4299e1', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;