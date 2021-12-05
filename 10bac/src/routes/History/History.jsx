import React from 'react';
import axios from 'axios';
import globalVars from './../../globalVars';
import { getCookie } from './../../utils';
import { Link } from 'react-router-dom';

export default function History() {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    const url = `${globalVars.apiPrefix}/user/note`;
    axios
      .get(url, {
        headers: {
          Authorization: getCookie('jwt')
        }
      })
      .then(
        res => {
          setNotes(res.data);
        },
        err => {
          console.error(err);
          window.location.replace('/stripe');
        }
      );
  }, []);

  // return (
  // 	<div>
  // 		<h1>History</h1>
  // 		<br />
  // 		{notes && notes.map(note => {
  //               return (
  //                   <div>
  //                       <hr />
  //                           <p>test:{note.test_title}</p>
  //                           <p>nota:{note.nota}</p>
  //                           <p>data:{note.date}</p>
  //                       <hr />
  //                   </div>
  //               );
  //           })}
  // 	</div>
  // );

  return (
    <div className="Lessons">
      <div className="top">
        <h2>Istoricul testelor tale</h2>

        <p className="description">Mai jos vei vedea o listă cu toate notele pe care le-ai primit.</p>
      </div>

      <div className="table">
        <div className="top-row">
          <p className="left">Titlul testului</p>

          <p className="center">Nota</p>
          <p className="right">Data</p>
        </div>

        {notes.map((nota, index) => {
          return (
            <div className={`row ${index % 2 === 0 ? 'even' : ''}`}>
              <p className="left">
                <span>
                  {index + 1}.{'  '}
                </span>{' '}
                {nota.test_title}
              </p>
              <p className="center">{nota.nota}</p>
              <p className="right">{nota.date.split('T')[0]}</p>

              {/* <p className="right">{lesson[1]}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
