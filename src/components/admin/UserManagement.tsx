import React, { useState } from 'react';
import { Table } from '../shared/ui/Table';
import { UserPlus, Search, Edit, Trash2 } from 'lucide-react';

export const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Recruiter', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Candidate', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Admin', status: 'Inactive' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <UserPlus className="h-5 w-5 mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <Table
          headers={['Name', 'Email', 'Role', 'Status', 'Actions']}
          data={users.map(user => ({
            ...user,
            actions: (
              <div className="flex space-x-2">
                <button className="p-1 text-blue-600 hover:text-blue-800">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-1 text-red-600 hover:text-red-800">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};