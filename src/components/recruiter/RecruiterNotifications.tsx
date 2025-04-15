import React from 'react';
import { Bell, Mail, Briefcase, User, CheckCircle, XCircle } from 'lucide-react';

export const RecruiterNotifications: React.FC = () => {
  const notifications = [
    {
      id: 1,
      type: 'application',
      title: 'Nouvelle candidature',
      description: 'Sophie Martin a postulé pour le poste de Développeur Frontend',
      time: 'Il y a 2 heures',
      icon: Briefcase,
      read: false,
      actions: ['accept', 'reject'],
    },
    {
      id: 2,
      type: 'message',
      title: 'Message de candidat',
      description: 'Lucas Bernard a envoyé un message concernant sa candidature',
      time: 'Il y a 3 heures',
      icon: Mail,
      read: false,
      actions: ['reply'],
    },
    {
      id: 3,
      type: 'system',
      title: 'Rappel entretien',
      description: 'Entretien prévu avec Emma Dubois demain à 14h00',
      time: 'Il y a 5 heures',
      icon: Bell,
      read: true,
      actions: [],
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Centre de notifications</h1>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
          Tout marquer comme lu
        </button>
      </div>

      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-6 hover:bg-gray-50 transition-colors ${
              !notification.read ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-2 rounded-full ${
                  !notification.read ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <notification.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{notification.description}</p>
                
                {notification.actions.length > 0 && (
                  <div className="mt-4 flex space-x-4">
                    {notification.actions.includes('accept') && (
                      <button className="flex items-center text-sm text-green-600 hover:text-green-800">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Accepter
                      </button>
                    )}
                    {notification.actions.includes('reject') && (
                      <button className="flex items-center text-sm text-red-600 hover:text-red-800">
                        <XCircle className="h-4 w-4 mr-1" />
                        Refuser
                      </button>
                    )}
                    {notification.actions.includes('reply') && (
                      <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                        <Mail className="h-4 w-4 mr-1" />
                        Répondre
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};