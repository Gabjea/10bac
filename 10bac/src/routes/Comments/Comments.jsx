import React, { useState } from 'react';
import './Comments.css';
import axios from 'axios';
import globalVars from './../../globalVars';
import { getCookie, getUserDataFromJwtReq } from './../../utils';
const textAreaStyle = { resize: 'none', width: '700px', height: '200px' };

export default function Comments({ lessonID }) {
  const addCommRef = React.createRef();
  const addRepRef = React.createRef();
  const [comments, setComments] = React.useState([]);
  const [userID, setUserID] = React.useState(null);

  React.useEffect(() => {
    //console.log(lessonID);
    axios
      .get(`${globalVars.apiPrefix}/comment/${lessonID}`, {
        headers: {
          Authorization: getCookie('jwt')
        }
      })
      .then(
        res => {
          setComments(res.data);
          //console.log(res.data);
        },
        err => {
          console.error(err);
          alert('error!');
        }
      ); //*/
  }, [lessonID]);

  React.useEffect(() => {
    getUserDataFromJwtReq().then(data => {
      setUserID(() => data._id);
      //console.log(data._id);
    });
  }, []);

  const [error, setError] = useState('');
  const [errorReply, setErrorReply] = useState('');

  const handleAddCommClick = event => {
    event.preventDefault();
    const { value: title } = addCommRef.current;
    if (!title) {
      setError('Întâi scrie un comentariu!');

      return;
    }
    axios
      .post(
        `${globalVars.apiPrefix}/comment`,
        {
          lectie_id: lessonID,
          title
        },
        {
          headers: {
            Authorization: getCookie('jwt')
          }
        }
      )
      .then(
        res => {
          window.location.reload();
        },
        err => {
          console.error(err);
          alert('eroare');
        }
      );
  };

  const handleAddRepClick = event => {
    event.preventDefault();
    const { value: title } = addRepRef.current;
    if (!title) {
      setErrorReply('Întâi scrie un răspuns!');

      return;
    }
    const nrComm = Number(event.target.id);
    const commId = comments[nrComm]._id;
    const url = `${globalVars.apiPrefix}/comment/reply/${commId}`;
    axios
      .post(
        url,
        {
          title
        },
        {
          headers: {
            Authorization: getCookie('jwt')
          }
        }
      )
      .then(
        res => {
          window.location.reload();
        },
        err => {
          alert('eroare');
          console.error(err);
        }
      ); //*/
  };

  const handleDelCommClick = event => {
    event.preventDefault();
    const nrComm = Number(event.target.id);
    console.log(nrComm);
    const commId = comments[nrComm]._id;
    const url = `${globalVars.apiPrefix}/comment/${commId}`;
    axios
      .delete(url, {
        headers: {
          Authorization: getCookie('jwt')
        }
      })
      .then(
        res => window.location.reload(),
        err => {
          alert('error!');
          console.error(err);
        }
      );
  };

  const handleDelReplClick = event => {
    event.preventDefault();
    const nrComm = Number(event.target.id);
    const nrRepl = Number(event.target.dataset.idrepl);
    const commId = comments[nrComm]._id;
    const replId = comments[nrComm].raspunsuri[nrRepl]._id;
    console.log(commId, replId);
    const url = `${globalVars.apiPrefix}/comment/reply/${commId}/${replId}`;
    axios
      .delete(url, {
        headers: {
          Authorization: getCookie('jwt')
        }
      })
      .then(
        res => window.location.reload(),
        err => {
          alert('error!');
          console.error(err);
        }
      );
  };

  let indexOfComm = 0;
  return (
    <div className="Comments">
      <div className="add-comment">
        <input ref={addCommRef} type="text" placeholder="Scrie un comentariu..." />

        <button onClick={handleAddCommClick}>Trimite</button>

        <p style={{ color: 'rgb(184, 44, 44)' }}>
          <br />
          <b>{error}</b>
        </p>
        <br />
      </div>
      <p className="highlight">
        <b>Comentariile lecției:</b>
      </p>
      <br />
      <br />
      <div className="comment-section">
        {comments &&
          comments.map(comment => {
            //console.log(comment.owner._id === userID);
            let indexOfRepl = 0;
            return (
              <div className="comment-box">
                <div className="comment">
                  <div className="left">
                    <img src={comment.owner.profile_pic} alt="" /> <br />
                  </div>
                  <div className="right">
                    <span className="name">{comment.owner.username}</span>
                    {userID === comment.owner._id && (
                      <button id={indexOfComm} onClick={handleDelCommClick} className="delete">
                        Șterge comentariul
                      </button>
                    )}
                    <p>{comment.title}</p>
                  </div>
                </div>
                <div style={{ color: 'red' }} className="replies-box">
                  <div className="add-reply add-comment">
                    <br />

                    <input ref={addRepRef} type="text" placeholder="Scrie un răspuns..." />
                    <button id={indexOfComm++} onClick={handleAddRepClick}>
                      Trimite
                    </button>
                    <p style={{ color: 'rgb(184, 44, 44)' }}>
                      <br />
                      <b>{errorReply}</b>
                    </p>
                  </div>

                  <div className="replies">
                    {comment.raspunsuri.map(ans => {
                      return (
                        <div className="reply comment">
                          <div className="left">
                            <img src={ans.owner.profile_pic} alt="" />
                          </div>
                          <div className="right">
                            <span className="name">{ans.owner.username}</span>
                            {userID === ans.owner._id && (
                              <button
                                id={indexOfComm}
                                data-idrepl={indexOfRepl++}
                                onClick={handleDelReplClick}
                                className="delete"
                              >
                                Șterge răspunsul
                              </button>
                            )}
                            <p>{ans.title}</p>
                          </div>
                          <br />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
