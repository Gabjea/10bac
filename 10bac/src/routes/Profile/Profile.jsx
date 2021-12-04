import React from 'react';
import './Profile.css';
import axios from 'axios';
import { getUserDataFromJwtReq, isLoggedIn } from '../../utils';
import globalVars from './../../globalVars';
import { getCookie } from '../../utils';
const url = globalVars.apiPrefix + '/user/profile';

export default function Profile() {
  const [userData, setUserData] = React.useState(null);
  const [userProfilePic, setUserProfilePic] = React.useState(null);

  const nameRef = React.createRef();
  const surnameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  React.useEffect(() => {
    if (!isLoggedIn()) {
      window.location.assign('/autentificare');
      return;
    }
  }, []);

  React.useEffect(() => {
    getUserDataFromJwtReq()
      .then(data => {
        setUserData({
          name: data.name,
          surname: data.surname,
          email: data.email
        });
      })
      .catch(err => {
        console.error(err);
        alert('error!');
      });
  }, []);

  const handleSubmitForm = async event => {
    event.preventDefault();
    const { value: name } = nameRef.current;
    const { value: surname } = surnameRef.current;
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    if (!name || !surname || !email || !password) {
      alert('fields must be filled!');
      return;
    }

    axios
      .patch(
        url,
        {
          name,
          surname,
          email,
          password
        },
        {
          headers: {
            Authorization: getCookie('jwt')
          }
        }
      )
      .then(
        res => {
          alert('updated successfully');
          window.location.reload();
        },
        err => {
          console.error(err);
          alert('error123!');
        }
      );
  };

  const handleImgSubm = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', userProfilePic);
    console.log(formData);
    axios
      .post(
        'http://79.113.201.115:5000/api/v1/user/profile/picture',
        formData,
        {
          headers: {
            Authorization: getCookie('jwt'),
            'Content-Type': 'multipart/form-data'
          }
        } //*/
      )
      .then(
        res => {
          //console.log(res.data);
          alert('img updated!');
          window.location.reload();
        },
        err => {
          console.error(err);
          alert('error');
        }
      )
      .catch(err => {
        console.error(err);
        alert('error2');
      });
  };

  const handleChange = event => {
    event.preventDefault();
    setUserProfilePic(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const logout = () => {
    document.cookie = 'jwt=; Max-Age=0; path=/; domain=' + window.location.hostname;
    window.location.reload();
  };

  return (
    <div className="Profile">
      <div className="container">
        <div className="left">
          <h2>Actualizare informații</h2>
          <p>Pentru a modifica informațiile tale personale completează formularul de mai jos.</p>
          <br />
          <form onSubmit={handleSubmitForm}>
            <input ref={nameRef} type="text" defaultValue={userData?.name} name="name" placeholder="Nume" />
            <br />
            <input
              ref={surnameRef}
              type="text"
              defaultValue={userData?.surname}
              name="surname"
              placeholder="Prenume"
            />
            <br />
            <input
              ref={emailRef}
              type="email"
              defaultValue={userData?.email}
              name="email"
              placeholder="E-mail"
            />
            <br />
            <input ref={passwordRef} type="password" name="psw" placeholder="Schimbă parola" />
            <br />
            <button type="submit">Trimite</button>
          </form>
        </div>

        <div className="right">
          <h2>Fotografie de profil</h2>
          <p>Pentru a-ți actualiza fotografie de profil încarcă o fotografie cu butonul de mai jos.</p>
          <br />
          <form onSubmit={handleImgSubm} method="POST" enctype="multipart/form-data">
            <label for="file" className="file-label">
              <input onChange={handleChange} type="file" name="file" id="file" />
              Încarcă o fotografie
            </label>
            <br />
            <br />
            <button type="submit">Trimite</button>

            <br />
            <br />
            <p style={{ color: 'rgb(184, 44, 44)', cursor: 'pointer', fontWeight: '700' }} onClick={logout}>
              Ieși din cont
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
