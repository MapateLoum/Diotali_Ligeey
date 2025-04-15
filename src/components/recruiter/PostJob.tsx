import React, { useState } from 'react';
import { Building, MapPin, BriefcaseIcon, DollarSign, Calendar, Users, Clock, Save } from 'lucide-react';

export const PostJob: React.FC = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    contractType: 'cdi',
    salary: { min: '', max: '', currency: 'EUR', period: 'annual' },
    experience: '',
    education: '',
    description: '',
    requirements: '',
    benefits: '',
    startDate: '',
    applicationDeadline: '',
    numberOfPositions: '1',
    workSchedule: 'full-time',
    remote: 'no',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted:', jobData);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Publier une offre d'emploi</h1>
        <p className="mt-2 text-gray-600">Remplissez les informations ci-dessous pour créer une nouvelle offre d'emploi.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informations principales */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Intitulé du poste</label>
              <div className="mt-1 relative">
                <BriefcaseIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={jobData.title}
                  onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="ex: Développeur Full Stack"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Entreprise</label>
              <div className="mt-1 relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={jobData.company}
                  onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nom de l'entreprise"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Localisation</label>
              <div className="mt-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={jobData.location}
                  onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="ex: Paris, France"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Type de contrat</label>
              <div className="mt-1">
                <select
                  value={jobData.contractType}
                  onChange={(e) => setJobData({ ...jobData, contractType: e.target.value })}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="cdi">CDI</option>
                  <option value="cdd">CDD</option>
                  <option value="interim">Intérim</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Stage</option>
                  <option value="apprenticeship">Alternance</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Rémunération et conditions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Rémunération et conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Fourchette de salaire</label>
              <div className="mt-1 grid grid-cols-2 gap-4">
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={jobData.salary.min}
                    onChange={(e) => setJobData({ 
                      ...jobData, 
                      salary: { ...jobData.salary, min: e.target.value }
                    })}
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Min"
                  />
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={jobData.salary.max}
                    onChange={(e) => setJobData({
                      ...jobData,
                      salary: { ...jobData.salary, max: e.target.value }
                    })}
                    className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Expérience requise</label>
              <div className="mt-1">
                <select
                  value={jobData.experience}
                  onChange={(e) => setJobData({ ...jobData, experience: e.target.value })}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Sélectionner</option>
                  <option value="junior">0-2 ans (Junior)</option>
                  <option value="intermediate">2-5 ans (Intermédiaire)</option>
                  <option value="senior">5-8 ans (Senior)</option>
                  <option value="expert">8+ ans (Expert)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date de début</label>
              <div className="mt-1 relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={jobData.startDate}
                  onChange={(e) => setJobData({ ...jobData, startDate: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre de postes</label>
              <div className="mt-1 relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="number"
                  min="1"
                  value={jobData.numberOfPositions}
                  onChange={(e) => setJobData({ ...jobData, numberOfPositions: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Télétravail</label>
              <div className="mt-1">
                <select
                  value={jobData.remote}
                  onChange={(e) => setJobData({ ...jobData, remote: e.target.value })}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="no">Non</option>
                  <option value="hybrid">Hybride</option>
                  <option value="full">100% Télétravail</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Horaires de travail</label>
              <div className="mt-1 relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={jobData.workSchedule}
                  onChange={(e) => setJobData({ ...jobData, workSchedule: e.target.value })}
                  className="pl-10 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="full-time">Temps plein</option>
                  <option value="part-time">Temps partiel</option>
                  <option value="flexible">Horaires flexibles</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Description et exigences */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Description et exigences</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Description du poste</label>
              <div className="mt-1">
                <textarea
                  value={jobData.description}
                  onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                  rows={6}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Décrivez les responsabilités et les missions du poste..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Prérequis et compétences</label>
              <div className="mt-1">
                <textarea
                  value={jobData.requirements}
                  onChange={(e) => setJobData({ ...jobData, requirements: e.target.value })}
                  rows={4}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Listez les compétences et qualifications requises..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Avantages</label>
              <div className="mt-1">
                <textarea
                  value={jobData.benefits}
                  onChange={(e) => setJobData({ ...jobData, benefits: e.target.value })}
                  rows={4}
                  className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Décrivez les avantages offerts (RTT, tickets restaurant, mutuelle...)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Enregistrer comme brouillon
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <Save className="h-5 w-5 mr-2" />
            Publier l'offre
          </button>
        </div>
      </form>
    </div>
  );
};