import React from 'react';
import './Nav.css';
import profilePic from './../../../assets/profil.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faFileAlt, faUser, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navLinks = [
    ['Materii', faBookOpen],
    ['Subiecte', faFileAlt],
    ['Istoric', faHistory],
    ['Profil', faUser]
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

            <Link to={`/${navLink[0].toLocaleLowerCase()}`}>
              <div className="link">
                <div className="link-container">
                  <FontAwesomeIcon icon={navLink[1]} size="2x" className="icon" />
                  <div className="link-name">{navLink[0]}</div>
                </div>
              </div>
            </Link>
          );
        })}
        <h1>
          10bac<span>.ro</span>
        </h1>
      </div>
    </div>
  );
};

export default Nav;
