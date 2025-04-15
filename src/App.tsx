import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { Navbar } from './components/shared/Navbar';
import { Home } from './components/shared/Home';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { JobSearch } from './components/candidate/JobSearch';
import { CandidateAuth } from './components/auth/CandidateAuth';
import { RecruiterAuth } from './components/auth/RecruiterAuth';
import { CandidateDashboard } from './components/candidate/CandidateDashboard';
import { RecruiterDashboard } from './components/recruiter/RecruiterDashboard';
import { Applications } from './components/candidate/Applications';
import { Notifications } from './components/shared/Notifications';
import { Settings } from './components/shared/Settings';
import { PostJob } from './components/recruiter/PostJob';
import { Companies } from './components/shared/Companies';
import { RecruiterApplications } from './components/recruiter/RecruiterApplications';
import { RecruiterNotifications } from './components/recruiter/RecruiterNotifications';
import { RecruiterSettings } from './components/recruiter/RecruiterSettings';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/register" element={<RegisterForm />} />
            <Route path="/auth/login/candidate" element={<CandidateAuth />} />
            <Route path="/auth/login/recruiter" element={<RecruiterAuth />} />
            <Route path="/jobs" element={<JobSearch />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/candidate/dashboard" element={<CandidateDashboard />} />
            <Route path="/candidate/applications" element={<Applications />} />
            <Route path="/candidate/notifications" element={<Notifications userType="candidate" />} />
            <Route path="/candidate/settings" element={<Settings userType="candidate" />} />
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/recruiter/applications" element={<RecruiterApplications />} />
            <Route path="/recruiter/notifications" element={<RecruiterNotifications />} />
            <Route path="/recruiter/settings" element={<RecruiterSettings />} />
            <Route path="/recruiter/jobs/new" element={<PostJob />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;