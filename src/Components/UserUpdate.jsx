import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">User List</h2>
      <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">Create New User</Link>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th> {/* Add Actions column */}
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
