import React, { useState } from 'react';
import { Search, UserPlus, LogIn, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthOptions, setShowAuthOptions] = useState(false);
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);

  const handleAuthClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAuthOptions(!showAuthOptions);
    setShowRegisterOptions(false);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowRegisterOptions(!showRegisterOptions);
    setShowAuthOptions(false);
  };

  return (
    <header className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">TalentHub</Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {/* Login Dropdown */}
              <div className="relative">
                <button
                  onClick={handleAuthClick}
                  className="flex items-center text-gray-500 hover:text-gray-700"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  <span>Connexion</span>
                </button>
                {showAuthOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/auth/login?type=candidate"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowAuthOptions(false)}
                    >
                      Connexion Candidat
                    </Link>
                    <Link
                      to="/auth/login?type=recruiter"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowAuthOptions(false)}
                    >
                      Connexion Recruteur
                    </Link>
                  </div>
                )}
              </div>

              {/* Register Dropdown */}
              <div className="relative">
                <button
                  onClick={handleRegisterClick}
                  className="flex items-center text-gray-500 hover:text-gray-700"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  <span>Inscription</span>
                </button>
                {showRegisterOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/auth/register?type=candidate"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowRegisterOptions(false)}
                    >
                      Inscription Candidat
                    </Link>
                    <Link
                      to="/auth/register?type=recruiter"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowRegisterOptions(false)}
                    >
                      Inscription Recruteur
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/auth/login?type=candidate"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Connexion Candidat
            </Link>
            <Link
              to="/auth/login?type=recruiter"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Connexion Recruteur
            </Link>
            <Link
              to="/auth/register?type=candidate"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Inscription Candidat
            </Link>
            <Link
              to="/auth/register?type=recruiter"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Inscription Recruteur
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};