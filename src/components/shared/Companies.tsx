import React, { useState } from 'react';
import { Search, MapPin, Users, Building, Star } from 'lucide-react';

export const Companies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industry, setIndustry] = useState('all');

  const companies = [
    {
      id: 1,
      name: 'Tech Corp',
      industry: 'Technologies',
      location: 'Paris, France',
      size: '500-1000 employés',
      description: 'Leader dans le développement de solutions cloud innovantes',
      logo: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.5,
      openPositions: 12,
    },
    {
      id: 2,
      name: 'Design Studio',
      industry: 'Design',
      location: 'Lyon, France',
      size: '50-200 employés',
      description: 'Studio de design créatif spécialisé dans l&#39;expérience utilisateur',
      logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.8,
      openPositions: 5,
    },
    {
      id: 3,
      name: 'StartUp Inc',
      industry: 'FinTech',
      location: 'Bordeaux, France',
      size: '10-50 employés',
      description: 'Startup innovante dans le secteur des technologies financières',
      logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      rating: 4.2,
      openPositions: 8,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une entreprise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tous les secteurs</option>
              <option value="tech">Technologies</option>
              <option value="design">Design</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Localisation..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
                  <p className="text-sm text-gray-500">{company.industry}</p>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  {company.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  {company.size}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  {company.rating} / 5.0
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">{company.description}</p>
              
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  {company.openPositions} postes ouverts
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Voir le profil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};