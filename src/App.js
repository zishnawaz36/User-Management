import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './Components/UserList';
import CreateUser from './Components/CreateUser';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
  ]);

  const refreshUsers = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<UsersList users={users} refreshUsers={refreshUsers} />} />
          <Route path="/create" element={<CreateUser refreshUsers={refreshUsers} users={users} />} />
          <Route path="/update/:id" element={<CreateUser refreshUsers={refreshUsers} users={users} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
