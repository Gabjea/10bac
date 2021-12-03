import React from 'react';
import './Nav.css';
import profilePic from './../../../assets/profil.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFileAlt, faUser, faHistory } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const navLinks = [
    ['Materii', '/materii', faBookOpen],
    ['Subiecte', '/subiecte', faFileAlt],
    ['Istoric', '/istoric', faUser],
    ['Profil', '/profil', faHistory]
  ];

  return (
    <div className="Nav">
      <div className="top">
        <img src={profilePic} alt="profilePic" className="profile-picture" />
        <span className="name">Anna Grant</span>
      </div>
      <div className="bottom">
        {navLinks.map(navLink => {
          return (
            // Router aici
            <div className="link">
              <div className="link-container">
                <FontAwesomeIcon icon={navLink[2]} size="2x" className="icon" />
                <div className="link-name">{navLink[0]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
