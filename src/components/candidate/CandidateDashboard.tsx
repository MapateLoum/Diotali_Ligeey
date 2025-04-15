import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, FileText, Bell, Settings, User } from 'lucide-react';

export const CandidateDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const applications = [
    { id: 1, position: 'Senior Developer', company: 'Tech Corp', status: 'En cours', date: '2024-03-15' },
    { id: 2, position: 'UX Designer', company: 'Design Co', status: 'Entretien', date: '2024-03-14' },
  ];

  const recommendedJobs = [
    { id: 1, title: 'Frontend Developer', company: 'StartUp Inc', location: 'Paris', salary: '45-55k€' },
    { id: 2, title: 'React Developer', company: 'Tech Solutions', location: 'Lyon', salary: '40-50k€' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white shadow-lg lg:fixed">
        <div className="p-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">Développeur Web</p>
            </div>
          </div>
          <nav className="space-y-2">
            <Link
              to="/jobs"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Briefcase className="h-5 w-5" />
              <span>Offres d'emploi</span>
            </Link>
            <Link
              to="/candidate/applications"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <FileText className="h-5 w-5" />
              <span>Mes candidatures</span>
            </Link>
            <Link
              to="/candidate/notifications"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </Link>
            <Link
              to="/candidate/settings"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 flex-1 p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Mes candidatures récentes */}
          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <h2 className="text-xl font-semibold mb-4">Mes candidatures récentes</h2>
            <div className="space-y-4">
              {applications.map(app => (
                <div key={app.id} className="border-b pb-4">
                  <h3 className="font-medium">{app.position}</h3>
                  <p className="text-sm text-gray-500">{app.company}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 space-y-2 sm:space-y-0">
                    <span className="text-sm text-blue-600">{app.status}</span>
                    <span className="text-sm text-gray-500">{app.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/candidate/applications"
              className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Voir toutes mes candidatures →
            </Link>
          </div>

          {/* Offres recommandées */}
          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <h2 className="text-xl font-semibold mb-4">Offres recommandées</h2>
            <div className="space-y-4">
              {recommendedJobs.map(job => (
                <div key={job.id} className="border-b pb-4">
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 space-y-2 sm:space-y-0">
                    <span className="text-sm text-gray-500">{job.location}</span>
                    <span className="text-sm text-gray-500">{job.salary}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/jobs"
              className="mt-4 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Voir toutes les offres →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};