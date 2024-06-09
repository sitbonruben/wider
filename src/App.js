// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Create from './components/Create';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Campaigns from './components/Campaigns';
import Automations from './components/Automations';
import Analytics from './components/Analytics';
import Templates from './components/Templates';
import MoreTools from './components/MoreTools';
import Help from './components/Help';
import Branding from './components/Branding';
import Integrations from './components/Integrations';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';
import Dashboard from './components/Dashboard'; // Ensure this is correctly imported
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './css/App.css';

function MainApp() {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery('(max-width:768px)');
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar open={open} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginTop: '64px', marginLeft: open && !isMobile ? '240px' : '0' }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<Create sidebarOpen={open} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/more-tools" element={<MoreTools />} />
          <Route path="/help" element={<Help />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Dashboard Routes */}
          <Route path="/app/*" element={<MainApp />} />
          
          {/* Redirect any other path to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
