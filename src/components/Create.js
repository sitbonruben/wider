import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGoogle, FaTiktok } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../css/Create.css';

const prompts = {
  marketing: [
    { icon: <FaFacebook color="#1877F2" />, text: 'Describe a successful Facebook marketing campaign.' },
    { icon: <FaInstagram color="#C13584" />, text: 'Write about an Instagram influencer strategy.' },
    { icon: <FaTwitter color="#1DA1F2" />, text: 'Create a viral tweet for your brand.' },
    { icon: <FaLinkedin color="#0A66C2" />, text: 'Discuss LinkedIn B2B marketing tactics.' },
  ],
  socialMedia: [
    { icon: <FaFacebook color="#1877F2" />, text: 'Plan a month of Facebook posts.' },
    { icon: <FaInstagram color="#C13584" />, text: 'Create Instagram Stories for a week.' },
    { icon: <FaTiktok color="#000000" />, text: 'Design a TikTok challenge for your audience.' },
    { icon: <FaTwitter color="#1DA1F2" />, text: 'Draft tweets for a product launch.' },
  ],
  analytics: [
    { icon: <FaGoogle color="#4285F4" />, text: 'Analyze your website traffic using Google Analytics.' },
    { icon: <FaTwitter color="#1DA1F2" />, text: 'Evaluate Twitter engagement metrics.' },
    { icon: <FaFacebook color="#1877F2" />, text: 'Review Facebook ad performance.' },
    { icon: <FaLinkedin color="#0A66C2" />, text: 'Assess LinkedIn post reach and engagement.' },
  ],
  research: [
    { icon: <FaLinkedin color="#0A66C2" />, text: 'Research LinkedIn competitor profiles.' },
    { icon: <FaGoogle color="#4285F4" />, text: 'Conduct a Google keyword analysis.' },
    { icon: <FaFacebook color="#1877F2" />, text: 'Identify Facebook audience demographics.' },
    { icon: <FaInstagram color="#C13584" />, text: 'Study Instagram hashtag performance.' },
  ],
};

const Create = ({ sidebarOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState('marketing');
  const [message, setMessage] = useState('');
  const [showPrompts, setShowPrompts] = useState(true);
  const [conversation, setConversation] = useState([]);
  const { isDarkMode } = useTheme();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePromptClick = (text) => {
    setMessage(text);
  };

  const handleSend = () => {
    // Add the message to the conversation
    setConversation([...conversation, message]);
    setMessage('');
    setShowPrompts(false); // Hide prompts after sending a message
  };

  return (
    <div className={`create-page ${isDarkMode ? 'dark-mode' : 'light-mode'} ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {showPrompts && (
        <>
          <div className="announcement-banner">
            <p>Announcement: Our new feature is launching next week!</p>
          </div>
          <div className="create-content">
            <div className="example-prompts">
              <div className="prompt-header">
                <select className="prompt-dropdown" onChange={handleCategoryChange} value={selectedCategory}>
                  <option value="marketing">Marketing</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="analytics">Analytics</option>
                  <option value="research">Research</option>
                </select>
              </div>
              <div className="prompt-grid">
                {prompts[selectedCategory].map((prompt, index) => (
                  <div key={index} className="prompt-item" onClick={() => handlePromptClick(prompt.text)}>
                    <div className="prompt-icon">{prompt.icon}</div>
                    <div className="prompt-text">{prompt.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="chat-form">
        <input
          type="text"
          className="chat-input"
          placeholder="Saisissez une requête ici"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>
      <div className="conversation">
        {conversation.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
    </div>
  );
};

export default Create;
