import React from 'react';
import { Users, Briefcase, Calendar, TrendingUp } from 'lucide-react';
import { Table } from '../shared/ui/Table';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { title: 'Active Jobs', value: '56', icon: Briefcase, color: 'bg-green-500' },
    { title: 'Interviews Today', value: '12', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Applications', value: '89', icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  const recentActivities = [
    { action: 'New Job Posted', company: 'Tech Corp', time: '2 hours ago' },
    { action: 'Application Submitted', company: 'Dev Inc', time: '3 hours ago' },
    { action: 'Interview Scheduled', company: 'StartUp Ltd', time: '5 hours ago' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <Table
          headers={['Action', 'Company', 'Time']}
          data={recentActivities}
        />
      </div>
    </div>
  );
};