import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className="HeaderBackground">
      <video autoPlay muted loop className="background-video">
      </video>
      <div className="HeaderContent">
        <h2>Poster Plus</h2>
        <h2 id="Unlimited">Unlimited</h2>
        <h1>
          Get A New Poster Every Month <br /> For Only 229,- a Month
        </h1>
        <p id="top">The minimum price during the 4-month binding period is 914 DKK.</p>
        <p>Subscription cannot be used by other accounts.</p>
      </div>
    </header>
  );
};
