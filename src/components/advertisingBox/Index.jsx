import React from 'react';

// It should be bcg - transmit variable from webpack to scss

const AdvertisingBox = () => (
  <div className="advertising-box">
    <img
        src="https://olx-development.s3.eu-central-1.amazonaws.com/fotolia_budowlaniec_robotnik.jpeg"
        alt="Pracownik budowlany"
        className="advertising-box__picture"
      />

      <h2 className="advertising-box__header advertising-box__header--main">
        Największy sklep budowlany w Polsce
      </h2>
      <h4 className="advertising-box__header advertising-box__header--secondary">
        Tysiące produktów wysokiej jakości
      </h4>
  </div>
);

export default AdvertisingBox;
