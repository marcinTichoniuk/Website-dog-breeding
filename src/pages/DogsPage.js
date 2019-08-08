import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/DogsPage.css';

import file from '../data/data.js';

// srcSet={`${dog.imgM} 400w`}

// @TODO add srcSet and different size images

const DogsPage = () => {

  const cards = file.dogs.map(dog => (
    <div key={dog.id} className="dogs-container" >
      <Link to={`/dog/${dog.name}`} className='dog-container'>
        <img src={dog.img} srcSet={`${dog.imgM} 400w`} alt="border" />
      </Link>
      <div className="dogs-text">
        <h1 className='dog-name'>{dog.name}</h1>
        {dog.title && <h1>{dog.title}</h1>}
        <h3>{dog.realName}</h3>
      </div>
      <Link to={`/dog/${dog.name}`} className='btn-dog'>
        <button className='btn'>Zobacz więcej</button>
      </Link>
    </div >
  ))

  return (
    <div className="dogs-page">
      <h3 className='main-section-title'>Psy</h3>
      {cards}
    </div>
  );
}

export default DogsPage;