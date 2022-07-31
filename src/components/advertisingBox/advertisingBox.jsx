import React from 'react';

const AdvertisingBox = () => {
  const blockName = 'advertising-box';

  return (
    <div className={blockName}>
      <div className={`${blockName}__background ${blockName}__background--dimmer`} />
      <div className={`${blockName}__background ${blockName}__background--picture`} />
      <div className={`${blockName}__text-wrapper`}>
        <h2 className={`${blockName}__header`}>Największy sklep budowlany w Polsce</h2>
        <p className={`${blockName}__text`}>Tysiące produktów wysokiej jakości</p>
      </div>
    </div>
  );
};

export default AdvertisingBox;
