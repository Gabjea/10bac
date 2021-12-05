import React, { useState, useEffect } from 'react';
import { getCookie } from '../../utils';
import './Stripe.css';

const ProductDisplay = () => (
  <section>
    <div className="product">
      <div className="description">
        <h1>
          Abonament <span className="highlight">10bac</span>
        </h1>
        <br />
        <p>
          Pentru a putea continua să vă oferim cele mai bune lecții de la cei mai bun profesori din țară,
          administratorii 10bac.ro au nevoie de susținerea dumneavoastră!
        </p>
        <p>
          Vă rugăm să încheiați un abonament de o lună pentru a primi acces la paginile site-ului. Mulțumim!
        </p>

        <br />
        <br />
        <h2 style={{ fontSize: '22px' }}>25 RON / lună</h2>
      </div>
    </div>
    <div className="container">
      {/* <Logo /> */}
      <img
        src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Emblem.png"
        alt="Stripe"
        style={{ height: '5em' }}
      />
      <form action="http://79.113.201.115:5000/api/v1/create-checkout-session" method="POST">
        <input name="token" type="hidden" value={getCookie('jwt')} />
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type="hidden" name="lookup_key" value="re" />
        <button id="checkout-and-portal-button" type="submit">
          Plătește
        </button>
      </form>
    </div>
  </section>
);

const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="product Box-root">
        <Logo />
        <div className="description Box-root">
          <h1>
            Abonament <span className="highlight">10bac</span>
          </h1>
          <br />
          <p>
            Pentru a putea continua să vă oferim cele mai bune lecții de la cei mai bun profesori din țară,
            administratorii 10bac.ro au nevoie de susținerea dumneavoastră!
          </p>
          <p>
            Vă rugăm să încheiați un abonament de o lună pentru a primi acces la paginile site-ului. Mulțumim!
          </p>

          <br />
          <br />
          <h2 style={{ fontSize: '22px' }}>25 RON / lună</h2>
        </div>
      </div>
      <form action="http://79.113.201.115:5000/api/v1/user/create-portal-session" method="POST">
        <input type="hidden" id="session-id" name="session_id" value={sessionId} />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Stripe() {
  let [message, setMessage] = useState('');
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, [sessionId]);

  if (!success && message === '') {
    return <ProductDisplay />;
  } else if (success && sessionId !== '') {
    return <SuccessDisplay sessionId={sessionId} />;
  } else {
    return <Message message={message} />;
  }
}

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="60px"
    height="60px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    <defs />
    <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="0-Default" transform="translate(-121.000000, -40.000000)" fill="#E184DF">
        <path
          d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
          id="Pilcrow"
        />
      </g>
    </g>
  </svg>
);
