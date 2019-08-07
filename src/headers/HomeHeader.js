import React from 'react';

const HomeHeader = () => {
  return (
    <div className="header__title">
      <h1 className='animate' style={{ animation: 'moveUp 0.5s ease forwards 0.25s' }}>Witaj w hodowli</h1>
      <h1 className='animate' style={{ animation: 'moveUp 0.5s ease forwards 0.5s' }}>Valey of Borders</h1>
    </div>
  );
}

export default HomeHeader;