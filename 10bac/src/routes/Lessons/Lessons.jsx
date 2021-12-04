import React from 'react';
import './Lessons.css';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../utils';

const Lessons = props => {
  React.useEffect(() => {
    if (!isLoggedIn()) {
      window.location.assign('/autentificare');
      return;
    }
  }, []);

  const lessonsMath = [
    ['Definitie', 'Operatii'], // Vectori
    ['Notiuni'] // Functii
  ];

  const lessonsRomanian = [
    ['Informatii generale Moara cu noroc', 'Comentariu Moara cu noroc'], // Moara cu noroc
    ['Informatii generale Plumb', 'Comentariu Plumb'] // Plumb
  ];

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

  let lessons = [],
    id = window.location.href.split('/').reverse()[0] * 1,
    idMaterie = window.location.href.split('/').reverse()[1] * 1,
    chapters = [];

  if (idMaterie === 1) {
    lessons = lessonsMath;
    chapters = chaptersMath;
  }

  if (idMaterie === 2) {
    lessons = lessonsRomanian;
    chapters = chaptersRomanian;
  }

  return (
    <div className="Lessons">
      <div className="top">
        <h2>
          Lecții disponibile pentru capitolul <span>{chapters[id - 1][0]}</span>
        </h2>

        <p className="description">Alege din lista de mai jos lecția pe care dorești să o studiezi.</p>
      </div>

      <div className="table">
        <div className="top-row">
          <p>Titlul lecției</p>
        </div>

        {lessons[id - 1].map((lesson, index) => {
          return (
            <Link to={`/lectie/${lesson.toLowerCase().replaceAll(' ', '-')}`}>
              <div className={`row ${index % 2 === 0 ? 'even' : ''}`}>
                <p className="left">
                  <span>
                    {index + 1}.{'  '}
                  </span>{' '}
                  {lesson}
                </p>

                {/* <p className="right">{lesson[1]}</p> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Lessons;
