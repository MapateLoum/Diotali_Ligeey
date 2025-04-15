import React from 'react';
import { Bell, Mail, Briefcase, User } from 'lucide-react';

interface NotificationsProps {
  userType: 'candidate' | 'recruiter';
}

export const Notifications: React.FC<NotificationsProps> = ({ userType }) => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'Nouveau message',
      description: userType === 'candidate' 
        ? 'Vous avez reçu une réponse de Tech Corp concernant votre candidature'
        : 'Nouveau CV reçu pour le poste de développeur',
      time: 'Il y a 2 heures',
      icon: Mail,
      read: false,
    },
    {
      id: 2,
      type: 'application',
      title: 'Candidature mise à jour',
      description: userType === 'candidate'
        ? 'Votre candidature pour le poste de Senior Developer est en cours de traitement'
        : 'Une candidature a été mise à jour pour le poste de UX Designer',
      time: 'Il y a 5 heures',
      icon: Briefcase,
      read: true,
    },
    {
      id: 3,
      type: 'profile',
      title: userType === 'candidate' ? 'Profil consulté' : 'Nouveau candidat',
      description: userType === 'candidate'
        ? 'Votre profil a été consulté par 3 recruteurs cette semaine'
        : 'Un nouveau candidat correspond à vos critères de recherche',
      time: 'Il y a 1 jour',
      icon: User,
      read: true,
    },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Tout marquer comme lu
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    !notification.read ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <notification.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{notification.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};