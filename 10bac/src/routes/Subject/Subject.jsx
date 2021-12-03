import React from 'react';
import './Subject.css';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../utils';

const Subject = props => {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      window.location.assign('/autentificare');
      return;
    }
  }, []);

  const chaptersMath = [
    ['Vectori', 2],
    ['Funcții', 2]
  ];

  const chaptersRomanian = [
    ['Ioan Slavici - Moara cu noroc', 2],
    ['George Bacovia - Plumb', 2]
  ];

  const subjects = [
    // Nume       Capitole         Teste disponibile
    'Matematică',
    'Limba română',
    'Informatică',
    'Fizică',
    'Chimie',
    'Biologie',
    'Geografie',
    'Istorie',
    'Limba engleză',
    'Logică',
    'Psihologie',
    'Educație antreprenorială',
    'Filosofie'
  ];

  let chapters = [],
    id = window.location.href.split('/').reverse()[0] * 1;

  if (id === 1) {
    chapters = chaptersMath;
  }

  if (id === 2) {
    chapters = chaptersRomanian;
  }

  return (
    <div className="Subject">
      <div className="top">
        <h2>
          Capitole disponibile pentru{' '}
          <span>{subjects[window.location.href.split('/').reverse()[0] - 1].toLowerCase()}</span>
        </h2>

        <p className="description">Alege din lista de mai jos capitolul pe care dorești să-l studiezi.</p>
      </div>

      <div className="table">
        <div className="top-row">
          <p className="left">Titlul capitolului</p>
          <p className="right">Lecții disponibile</p>
        </div>

        {chapters.map((chapter, index) => {
          return (
            <Link to={`/lectii/${id}/${index + 1}`}>
              <div className={`row ${index % 2 === 0 ? 'even' : ''}`}>
                <p className="left">
                  <span>
                    {index + 1}.{'  '}
                  </span>{' '}
                  {chapter[0]}
                </p>

                <p className="right">{chapter[1]}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Subject;
