import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../css/Dashboard.css';

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`dashboard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>Main Content Area</h2>
    </div>
  );
};

export default Dashboard;
