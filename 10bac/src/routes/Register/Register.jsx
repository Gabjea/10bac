import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import teacherImg from './../../assets/teacher.png';
import { setCookie } from '../../utils';
import globalVars from '../../globalVars';

const url = globalVars.apiPrefix + '/user/register';

const Register = () => {
  const [error, setError] = useState('x');

  const nameRef = React.createRef();
  const surnameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const confPassRef = React.createRef();

  const handleFormSubmit = async event => {
    event.preventDefault();
    const { value: name } = nameRef.current;
    const { value: surname } = surnameRef.current;
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;
    const { value: password2 } = confPassRef.current;

    if (!name || !surname || !email || !password || !password2)
      return setError('Completează toate câmpurile și încearcă din nou!');

    if (password.length < 6) return setError('Parola trebuie să conțină minim 6 caractere!');

    if (password !== password2) return setError('Parolele nu coincid!');

    axios
      .post(url, {
        name,
        surname,
        email,
        password
      })
      .then(
        res => {
          setCookie('jwt', res.data.token);
          window.location.href = '/materii';
        },
        err => {
          console.error(err);
          alert('eroare!');
        }
      );
  };

  return (
    <div className="Register">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <div className="left">
            <h2>Cont nou</h2>
            <p>Pentru a te înregistra completează formularul acesta.</p>
            <p>
              Dacă ai deja cont, te rugăm sa te autentifici <a href="/autentificare">aici</a>!
            </p>

            <img src={teacherImg} alt="Profesor" />
          </div>
          <div className="right">
            <input ref={nameRef} type="text" placeholder="Prenume" name="name" />

            <input ref={surnameRef} type="text" placeholder="Nume" name="surname" />
            <input ref={emailRef} type="email" placeholder="E-mail" name="email" />

            <input ref={passwordRef} type="password" placeholder="Parolă" name="psw" />

            <input ref={confPassRef} type="password" placeholder="Confirmă parola" name="cpsw" />

            <button type="submit">Trimite</button>
            <span
              className="error"
              style={{
                color: error === 'x' ? '#706fd3' : 'rgb(184, 44, 44)'
              }}
            >
              {error}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
