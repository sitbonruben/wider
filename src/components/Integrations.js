import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaSalesforce, FaHubspot, FaGlobe, FaChartLine, FaInstagram, FaYoutube, FaTiktok, FaMicrosoft, FaGoogle, FaWix, FaShopify } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../css/Integrations.css';

const integrationsData = [
  { id: 1, name: 'Facebook', category: 'Social Media', description: 'Connect with Facebook.', icon: <FaFacebook color="#1877F2" /> },
  { id: 2, name: 'Twitter', category: 'Social Media', description: 'Connect with Twitter.', icon: <FaTwitter color="#1DA1F2" /> },
  { id: 3, name: 'LinkedIn', category: 'Social Media', description: 'Connect with LinkedIn.', icon: <FaLinkedin color="#0A66C2" /> },
  { id: 4, name: 'Instagram', category: 'Social Media', description: 'Connect with Instagram.', icon: <FaInstagram color="#C13584" /> },
  { id: 5, name: 'YouTube', category: 'Social Media', description: 'Connect with YouTube.', icon: <FaYoutube color="#FF0000" /> },
  { id: 6, name: 'TikTok', category: 'Social Media', description: 'Connect with TikTok.', icon: <FaTiktok color="#000000" /> },
  { id: 7, name: 'Gmail', category: 'Email', description: 'Connect with Gmail.', icon: <FaEnvelope color="#D44638" /> },
  { id: 8, name: 'Outlook', category: 'Email', description: 'Connect with Outlook.', icon: <FaEnvelope color="#0078D4" /> },
  { id: 9, name: 'Salesforce', category: 'CRM', description: 'Connect with Salesforce.', icon: <FaSalesforce color="#00A1E0" /> },
  { id: 10, name: 'HubSpot', category: 'CRM', description: 'Connect with HubSpot.', icon: <FaHubspot color="#FF7A59" /> },
  { id: 11, name: 'Google Ads', category: 'Marketing', description: 'Connect with Google Ads.', icon: <FaGoogle color="#4285F4" /> },
  { id: 12, name: 'Microsoft', category: 'Productivity', description: 'Connect with Microsoft.', icon: <FaMicrosoft color="#F25022" /> },
  { id: 13, name: 'Wix', category: 'Website', description: 'Connect with Wix.', icon: <FaWix color="#000000" /> },
  { id: 14, name: 'Shopify', category: 'Website', description: 'Connect with Shopify.', icon: <FaShopify color="#96BF48" /> },
  { id: 15, name: 'Marketing', category: 'Marketing', description: 'Marketing tools.', icon: <FaChartLine color="#007bff" /> },
  { id: 16, name: 'Website', category: 'Website', description: 'Website tools.', icon: <FaGlobe color="#007bff" /> },
];

const Integrations = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [integrations, setIntegrations] = useState(integrationsData);
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConnectPopup, setShowConnectPopup] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredIntegrations = selectedCategory === 'All'
    ? integrations
    : integrations.filter(integration => integration.category === selectedCategory);

  const handleConnect = (integration) => {
    setSelectedIntegration(integration);
    setShowConnectPopup(true);
  };

  const handleDisconnect = (integration) => {
    setSelectedIntegration(integration);
    setShowConfirmation(true);
  };

  const confirmDisconnect = () => {
    setIntegrations(integrations.map(integration =>
      integration.id === selectedIntegration.id ? { ...integration, connected: false } : integration
    ));
    setShowConfirmation(false);
    setSelectedIntegration(null);
  };

  const confirmConnect = () => {
    setIntegrations(integrations.map(integration =>
      integration.id === selectedIntegration.id ? { ...integration, connected: true } : integration
    ));
    setShowConnectPopup(false);
    setSelectedIntegration(null);
  };

  return (
    <div className={`integrations-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Integrations</h1>
      <div className="filters">
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Social Media')}>Social Media</button>
        <button onClick={() => handleCategoryChange('Email')}>Email</button>
        <button onClick={() => handleCategoryChange('CRM')}>CRM</button>
        <button onClick={() => handleCategoryChange('Marketing')}>Marketing</button>
        <button onClick={() => handleCategoryChange('Website')}>Website</button>
        <button onClick={() => handleCategoryChange('Productivity')}>Productivity</button>
      </div>
      <div className="integrations-list">
        {filteredIntegrations.map(integration => (
          <div key={integration.id} className="integration-card">
            <div className="integration-icon">{integration.icon}</div>
            <h2>{integration.name}</h2>
            <p>{integration.description}</p>
            <button
              className="connect-button"
              onClick={() => integration.connected ? handleDisconnect(integration) : handleConnect(integration)}
            >
              {integration.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>

      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Are you sure you want to disconnect? You will no longer be able to use this integration.</p>
          <button className="confirmation-button" onClick={confirmDisconnect}>Yes</button>
          <button className="confirmation-button" onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}

      {showConnectPopup && (
        <div className="connect-popup">
          <p>Connect to {selectedIntegration.name}</p>
          <button className="connect-button" onClick={confirmConnect}>Connect</button>
          <button className="connect-button" onClick={() => setShowConnectPopup(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Integrations;
