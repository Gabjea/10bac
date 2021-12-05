import React from 'react';
import axios from 'axios';
import globalVars from '../../../globalVars';
import { getCookie } from '../../../utils';

const Teste = () => {
  const [tests, setTests] = React.useState([]);

  React.useEffect(() => {
    //console.log(lessonID);
    axios
      .get(`${globalVars.apiPrefix}/admin/sub_bac`, {
        headers: {
          Authorization: getCookie('jwt')
        }
      })
      .then(
        res => {
          setTests(res.data);
          console.log(res.data);
        },
        err => {
          console.error(err);
          alert('error!');
        }
      );
  }, []);

  return (
    <div className="TesteAdmin">
      <h2>Teste de corectat</h2>
    </div>
  );
};

export default Teste;
