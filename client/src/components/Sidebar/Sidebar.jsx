import React from 'react';
import './Sidebar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import homeIcon from 'assets/icons/home.svg';
import profileIcon from 'assets/icons/profile.png';
import communityIcon from 'assets/icons/community.png';
import jobsIcon from 'assets/icons/jobs.png';
import postIcon from 'assets/icons/post.png';

const Sidebar = () => {
  return (
    <div style={styles.container} className="sidebar">
      <header style={styles.header}>
        <img style={styles.imageLarge} src={profileIcon} alt="" />
        <span style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#666', cursor: 'pointer'}}>
          Joe Vasquez
        </span>
      </header>
      <ul style={styles.list}>
        <li style={styles.item}>
          <img style={styles.image} src={homeIcon} alt="" />
          <span>Home</span>
        </li>
        <li style={styles.item}>
          <img style={styles.image} src={communityIcon} alt="" />
          <span>Communities</span>
        </li>
        <li style={styles.item}>
          <img style={styles.image} src={jobsIcon} alt="" />
          <span>Jobs</span>
        </li>
        <li style={styles.item}>
          <img style={styles.image} src={postIcon} alt="" />
          <span>Post</span>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    background: 'white',
    borderRadius: '8px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '#f0f2f5 1px solid',
    padding: '15px',
  },
  list: {},
  item: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    height: '40px',
    color: '#666',
    cursor: 'pointer',
    paddingLeft: '20px',
    height: '60px',
  },
  image: {
    marginRight: '20px',
    width: '24px',
  },
  imageLarge: {
    width: '40px',
    marginRight: '20px',
    cursor: 'pointer'
  },
};

export default Sidebar;
