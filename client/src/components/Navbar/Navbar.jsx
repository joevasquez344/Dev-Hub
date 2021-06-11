import React, {useEffect, useState} from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import SearchIcon from '@material-ui/icons/Search';
import ExploreIcon from '@material-ui/icons/Explore';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useHistory, useLocation} from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const [tabs, setTabs] = useState([
    {
      id: 1,
      component: <HomeIcon fontSize='large' />,
      route: () => history.push('/home'),
      path: '/home',
      active: false,
    },
    {
      id: 2,
      component: <AccountCircleIcon fontSize='large' />,
      route: () => history.push('/profile'),
      path: '/profile',
      active: false,
    },
    {
      id: 3,
      component: <ExploreIcon fontSize='large' />,
      route: () => history.push('/explore'),
      path: '/explore',
      active: false,
    },
    {
      id: 4,
      component: <WorkIcon fontSize='large' />,
      route: () => history.push('/jobs'),
      path: '/jobs',
      active: false,
    },
  ]);

  useEffect(() => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.path === location.pathname) {
        tab.active = true;
      } else {
        tab.active = false;
      }

      return tab;
    });

    setTabs(updatedTabs);
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-form-grouping">
          <span className="navbar-form-icon">
            <SearchIcon />
          </span>
          <input type="text" placeholder="Search Devs" />
        </div>
      </div>
      <div className="navbar-center">
        {tabs.map((tab) => (
          <div onClick={() => tab.route()} className="navbar-center-icon">
            {' '}
            {tab.component}
            {tab.active ? <div className="navbar-icon-underline"></div> : null}
          </div>
        ))}
        {/* <div className="navbar-icon-underline"></div> */}
      </div>
      <div className="navbar-right">
        <div className="navbar-right-icon">
          <NotificationsIcon />
        </div>
        <div className="navbar-right-icon">
          <EmailIcon />
        </div>
        <div className="navbar-right-icon">
          <ViewComfyIcon />
        </div>
        <div className="navbar-right-icon">
          <ExitToAppIcon />
        </div>
        <div className="navbar-right-icon">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
