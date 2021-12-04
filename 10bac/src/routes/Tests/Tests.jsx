import React from 'react';
import './Tests.css';

const Tests = () => {
  return (
    <div className="Tests">
      <h2>Modele de subiecte pentru examenul de bacalaureat</h2>
      <br />
      <br />
      <h2>Model 1 matematică</h2>
      <iframe
        src="https://www.modinfo.ro/bac/variante-test-2021/mate/v1.pdf"
        style={{ width: '800px', height: '800px' }}
        title="english"
      ></iframe>

      <br />
      <br />
      <br />

      <h2>Model 1 limba română</h2>
      <iframe
        src="https://profesorjitaruionel.com/wp-content/uploads/2021/11/E_a_romana_real_tehn_2022_var_model.pdf"
        style={{ width: '800px', height: '800px' }}
        title="english"
      ></iframe>
      {/* <embed
        src="data://79.113.201.115:5000/uploads/subs_bac/61ab5f1a9d129b39d0ecd4f1.pdf"
        width="800px"
        height="800px"
      /> */}
      {/* <object
        data="http://79.113.201.115:5000/uploads/subs_bac/61ab5f1a9d129b39d0ecd4f1.pdf"
        type="application/pdf"
        width="300"
        height="200"
      >
        <a href="http://79.113.201.115:5000/uploads/subs_bac/61ab5f1a9d129b39d0ecd4f1.pdf">test.pdf</a>
      </object> */}
    </div>
  );
};

export default Tests;
