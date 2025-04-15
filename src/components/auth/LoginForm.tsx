import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userType = searchParams.get('type');

  useEffect(() => {
    if (userType === 'candidate') {
      navigate('/auth/login/candidate');
    } else if (userType === 'recruiter') {
      navigate('/auth/login/recruiter');
    }
  }, [userType, navigate]);

  return null;
};