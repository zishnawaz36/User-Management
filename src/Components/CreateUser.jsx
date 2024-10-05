import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUser = ({ refreshUsers, users }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const user = users.find(u => u.id === parseInt(id)); 
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
      }
    }
  }, [id, users]);

  const handleSave = async () => {
    if (!name || !email || !phone) {
      alert('All fields are required');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    const newUser = { name, email, phone };

    try {
      if (id) {
        // Update existing user
        const updatedUser = { ...newUser, id: parseInt(id) }; 
        const updatedUsers = users.map(user => user.id === parseInt(id) ? updatedUser : user);
        refreshUsers(updatedUsers);
      } else {
        // Create new user
        const newId = users.length + 1; 
        const createdUser = { ...newUser, id: newId }; 
        refreshUsers([...users, createdUser]); 
      }
      navigate('/'); 
    } catch (error) {
      console.error('Error saving user:', error);
      alert("Failed to save user. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{id ? 'Edit User' : 'Create New User'}</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
        className="border rounded p-2 mb-2 w-full"
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email"
        className="border rounded p-2 mb-2 w-full"
      />
      <input
        type="text"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Enter phone"
        className="border rounded p-2 mb-4 w-full"
      />
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
        {id ? 'Update User' : 'Create User'}
      </button>
    </div>
  );
};

export default CreateUser;
