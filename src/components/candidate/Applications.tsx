import React, { useState } from 'react';
import { Search, Filter, Briefcase } from 'lucide-react';

export const Applications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const applications = [
    {
      id: 1,
      position: 'Senior Frontend Developer',
      company: 'Tech Corp',
      location: 'Paris',
      status: 'En cours',
      date: '15 Mars 2024',
      logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 2,
      position: 'UX Designer',
      company: 'Design Studio',
      location: 'Lyon',
      status: 'Entretien',
      date: '14 Mars 2024',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      id: 3,
      position: 'Product Manager',
      company: 'StartUp Inc',
      location: 'Remote',
      status: 'Refusé',
      date: '10 Mars 2024',
      logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'Entretien':
        return 'bg-green-100 text-green-800';
      case 'Refusé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Mes Candidatures</h1>

      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une candidature..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tous les statuts</option>
                <option value="pending">En cours</option>
                <option value="interview">Entretien</option>
                <option value="rejected">Refusé</option>
              </select>
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <Filter className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={application.logo}
                    alt={application.company}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">{application.position}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-gray-500">
                      {application.company} • {application.location}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Postulé le {application.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};