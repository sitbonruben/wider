import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = ({ open }) => {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-content">
        <ul className="sidebar-list">
          {[
            { text: 'Create', icon: 'add_circle_outline', path: '/app/create' },
            { text: 'Projects', icon: 'work', path: '/app/projects' },
            { text: 'Calendar', icon: 'calendar_today', path: '/app/calendar' },
            { text: 'Campaigns', icon: 'campaign', path: '/app/campaigns' },
            { text: 'Automations', icon: 'settings', path: '/app/automations' },
            { text: 'Analytics', icon: 'analytics', path: '/app/analytics' },
            { text: 'Templates', icon: 'file_copy', path: '/app/templates' },
            { text: 'More Tools', icon: 'build', path: '/app/more-tools' },
          ].map((item, index) => (
            <li key={index} className="sidebar-list-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                exact="true"
              >
                <span className="material-icons sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="sidebar-bottom">
          <ul className="sidebar-list">
            {[
              { text: 'Help', icon: 'help_outline', path: '/app/help' },
              { text: 'Branding', icon: 'branding_watermark', path: '/app/branding' },
              { text: 'Integrations', icon: 'integration_instructions', path: '/app/integrations' }
            ].map((item, index) => (
              <li key={index} className="sidebar-list-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                  exact="true"
                >
                  <span className="material-icons sidebar-icon">{item.icon}</span>
                  <span className="sidebar-text">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
