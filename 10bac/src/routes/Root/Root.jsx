import React from 'react';
import './Root.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareRootAlt,
  faFont,
  faCode,
  faAtom,
  faFlask,
  faLeaf,
  faMapMarkedAlt,
  faLandmark,
  faLanguage,
  faPuzzlePiece,
  faBrain,
  faChartLine,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../utils';

const Root = () => {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      window.location.assign('/autentificare');
      return;
    }
  }, []);

  const subjects = [
    // Nume       Capitole         Teste disponibile
    ['Matematică', faSquareRootAlt, 14, 23],
    ['Limba română', faFont, 15, 12],
    ['Informatică', faCode, 9, 15],
    ['Fizică', faAtom, 11, 7],
    ['Chimie', faFlask, 3, 2],
    ['Biologie', faLeaf, 9, 6],
    ['Geografie', faMapMarkedAlt, 3, 1],
    ['Istorie', faLandmark, 3, 5],
    ['Limba engleză', faLanguage, 13, 10],
    ['Logică', faPuzzlePiece, 6, 4],
    ['Psihologie', faBrain, 7, 2],
    ['Educație antreprenorială', faChartLine, 9, 8],
    ['Filosofie', faQuestion, 8, 9]
  ];

  return (
    <div className="Root">
      <div className="top">
        <h2>Materii disponibile</h2>

        <p className="description">
          Bine ai venit! Pentru a începe te rugăm să alegi o materie pe care dorești să o studiezi.
          <br />
          Până acum avem <span>4</span> materii disponibile și un total de <span>22</span> de capitole!
        </p>
      </div>

      <div className="table">
        <div className="top-row">
          <p className="left">Numele materiei</p>
          <p className="center">Capitole</p>
          <p className="right">Teste disponibile</p>
        </div>

        {subjects.map((subject, index) => {
          return (
            <Link to={`/materie/${index + 1}`}>
              <div className={`row ${index % 2 === 0 ? 'even' : ''}`}>
                <p className="left">
                  <FontAwesomeIcon icon={subject[1]} size="1x" className="icon" />
                  {subject[0]}
                </p>
                <p className="center">{subject[2]}</p>
                <p className="right">{subject[3]}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Root;
