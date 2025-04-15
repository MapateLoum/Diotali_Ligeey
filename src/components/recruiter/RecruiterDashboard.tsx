import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Bell, Settings, Building, Plus, User } from 'lucide-react';

export const RecruiterDashboard: React.FC = () => {
  const recentApplications = [
    { id: 1, candidate: 'Sophie Martin', position: 'Frontend Developer', status: 'Nouveau', date: '2024-03-15' },
    { id: 2, candidate: 'Lucas Bernard', position: 'UX Designer', status: 'En cours', date: '2024-03-14' },
  ];

  const activeJobs = [
    { id: 1, title: 'Senior React Developer', applications: 12, views: 145, status: 'Actif' },
    { id: 2, title: 'UI/UX Designer', applications: 8, views: 98, status: 'Actif' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white shadow-lg lg:fixed">
        <div className="p-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Tech Corp</h2>
              <p className="text-sm text-gray-500">Recruteur</p>
            </div>
          </div>
          <nav className="space-y-2">
            <Link
              to="/recruiter/jobs"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Briefcase className="h-5 w-5" />
              <span>Offres publiées</span>
            </Link>
            <Link
              to="/recruiter/candidates"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Users className="h-5 w-5" />
              <span>Candidatures</span>
            </Link>
            <Link
              to="/recruiter/notifications"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 w-full"
            >
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </Link>
            <Link
              to="/recruiter/settings"
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <h1 className="text-2xl font-bold">Tableau de bord</h1>
          <Link
            to="/recruiter/jobs/new"
            className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto justify-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Publier une offre
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Candidatures récentes */}
          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <h2 className="text-xl font-semibold mb-4">Candidatures récentes</h2>
            <div className="space-y-4">
              {recentApplications.map(app => (
                <div key={app.id} className="border-b pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">{app.candidate}</h3>
                      <p className="text-sm text-gray-500">{app.position}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 space-y-2 sm:space-y-0">
                    <span className="text-sm text-orange-600">{app.status}</span>
                    <span className="text-sm text-gray-500">{app.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/recruiter/candidates"
              className="mt-4 inline-block text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Voir toutes les candidatures →
            </Link>
          </div>

          {/* Offres actives */}
          <div className="bg-white rounded-lg shadow p-4 lg:p-6">
            <h2 className="text-xl font-semibold mb-4">Offres actives</h2>
            <div className="space-y-4">
              {activeJobs.map(job => (
                <div key={job.id} className="border-b pb-4">
                  <h3 className="font-medium">{job.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 space-y-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0">
                      <span className="text-sm text-gray-500">{job.applications} candidatures</span>
                      <span className="text-sm text-gray-500">{job.views} vues</span>
                    </div>
                    <span className="text-sm text-green-600">{job.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/recruiter/jobs"
              className="mt-4 inline-block text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Voir toutes les offres →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};