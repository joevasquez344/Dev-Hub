import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header>
        <DeveloperModeIcon  fontSize="large" />{' '}
        <span>Dev Hub</span>
      </header>
      <ul>
        <li>
          <HomeIcon /> <span>Home</span>
        </li>
        <li>
          <AccountCircleIcon fontSize="default" /> <span>Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
