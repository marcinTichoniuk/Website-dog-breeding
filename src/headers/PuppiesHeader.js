import React from 'react';

// @TODO add different description in <p><p/> - depends on having puppies

const PuppiesHeader = () => {
  return (
    <div className="header__text-container">
      <h1 className='header__title'>Szczeniaki</h1>
      <p className="header__text">Obecnie brak!</p>
    </div>
  );
}

export default PuppiesHeader;