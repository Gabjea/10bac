import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { isLoggedIn, setCookie } from '../../utils';
import studentImg from './../../assets/student.png';
import globalVars from '../../globalVars';

const url = globalVars.apiPrefix + '/user/login';

export default function Login() {
  const [error, setError] = useState('x');

  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  React.useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = '/';
    }
  }, []);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    if (!email || !password) return setError('Completează ambele câmpuri și încearcă din nou!');

    axios
      .post(url, {
        email,
        password
      })
      .then(
        res => {
          setCookie('jwt', res.data.token);
          window.location.assign('/');
        },
        err => {
          return setError('Email-ul și parola nu coincid!');
        }
      );
  };

  return (
    <div className="Register Login Profile">
      <form onSubmit={handleFormSubmit}>
        <div className="left">
          <h2>Intră în cont</h2>
          <p>Pentru a te conecta la contul tău te rugăm să completezi acest formular.</p>
          <p>
            Dacă nu ai cont, te rugăm să te înregistrezi <a href="/inregistrare">aici</a>!
          </p>

          <img src={studentImg} alt="Elev" />
        </div>
        <div className="right">
          <input ref={emailRef} type="email" placeholder="Introdu email-ul" name="email" />

          <input ref={passwordRef} type="password" placeholder="Introdu parola" name="psw" />

          <button type="submit">Trimite</button>
          <span
            className="error"
            style={{ marginTop: '2em', color: error === 'x' ? '#706fd3' : 'rgb(184, 44, 44)' }}
          >
            {error}
          </span>
        </div>
      </form>
    </div>
  );
}
