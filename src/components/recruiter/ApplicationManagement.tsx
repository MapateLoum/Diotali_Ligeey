import React, { useState } from 'react';
import { Table } from '../shared/ui/Table';
import { Search, CheckCircle, XCircle, Calendar } from 'lucide-react';

export const ApplicationManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const applications = [
    {
      id: 1,
      candidate: 'John Smith',
      position: 'Senior Developer',
      status: 'Under Review',
      appliedDate: '2024-03-15',
    },
    {
      id: 2,
      candidate: 'Sarah Johnson',
      position: 'UX Designer',
      status: 'Interviewed',
      appliedDate: '2024-03-14',
    },
    {
      id: 3,
      candidate: 'Mike Brown',
      position: 'Product Manager',
      status: 'Pending',
      appliedDate: '2024-03-13',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Application Management</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="ml-4 border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Under Review</option>
            <option value="interviewed">Interviewed</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <Table
          headers={['Candidate', 'Position', 'Applied Date', 'Status', 'Actions']}
          data={applications.map(app => ({
            ...app,
            actions: (
              <div className="flex space-x-2">
                <button className="p-1 text-blue-600 hover:text-blue-800">
                  <Calendar className="h-5 w-5" />
                </button>
                <button className="p-1 text-green-600 hover:text-green-800">
                  <CheckCircle className="h-5 w-5" />
                </button>
                <button className="p-1 text-red-600 hover:text-red-800">
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};