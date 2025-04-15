import React, { useState } from 'react';
import { Table } from '../shared/ui/Table';
import { Search, CheckCircle, XCircle } from 'lucide-react';

export const JobModeration: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior Developer',
      company: 'Tech Corp',
      status: 'Pending',
      postedDate: '2024-03-15',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartUp Ltd',
      status: 'Approved',
      postedDate: '2024-03-14',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Design Co',
      status: 'Pending',
      postedDate: '2024-03-13',
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Moderation</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <Table
          headers={['Title', 'Company', 'Posted Date', 'Status', 'Actions']}
          data={jobs.map(job => ({
            ...job,
            actions: (
              <div className="flex space-x-2">
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