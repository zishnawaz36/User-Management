import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users, refreshUsers }) => {
  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    
    if (confirmDelete) {
      try {
        // Simulate delete request by filtering out the user
        const updatedUsers = users.filter(user => user.id !== userId);
        refreshUsers(updatedUsers); // Update users state

        alert("User deleted successfully!");
      } catch (error) {
        console.error('Error deleting user:', error);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  if (!users || users.length === 0) {
    return <p className="text-center text-red-500">No users found.</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Create New User</Link>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link 
                  to={`/update/${user.id}`} 
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(user.id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
