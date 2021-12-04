import './App.css';
import Nav from './../src/routes/global/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Root from './routes/Root/Root';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import Profile from './routes/Profile/Profile';
import Subject from './routes/Subject/Subject';
import Lessons from './routes/Lessons/Lessons';
import { isLoggedIn } from './utils';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content" style={{ width: isLoggedIn() ? '83%' : '100%' }}>
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route path="/materii" element={<Root />} />
          <Route path="/lectii/:id_materie/:id_capitol" element={<Lessons />} />
          <Route path="/materie/:id" element={<Subject />} />
          <Route path="/subiecte" element={<Root />} />
          <Route path="/istoric" element={<Root />} />
          <Route path="/inregistrare" element={<Register />} />
          <Route path="/autentificare" element={<Login />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
