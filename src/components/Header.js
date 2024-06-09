import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import '../css/Header.css';

const Header = ({ handleDrawerToggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`header ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="menu-button" onClick={handleDrawerToggle}>
        <span className="material-icons">menu</span>
      </button>
      <img src="/images/logo2.png" alt="Logo" className="header-logo" />
      <div className="header-center"></div>
      <div className="header-right">
        <button className={`theme-toggle-button ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleTheme}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <div className="account-container">
          <button className={`account-button ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDropdown}>
            <span className="material-icons">person</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>Account</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
