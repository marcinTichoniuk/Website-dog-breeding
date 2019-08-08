import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/DogsPage.css';

import file from '../data/data';

// @TODO add srcSet and different size images

const FemalePage = () => {

  const cards = file.femaleDogs.map(dog => (
    <div key={dog.id} className="dogs-container">
      <Link to={`/femaleDog/${dog.name}`} className='dog-container'>
        <img src={dog.img} alt="border" />
      </Link>
      <div className="dogs-text">
        <h1 className='dog-name'>{dog.name}</h1>
        {dog.title && <h1>{dog.title}</h1>}
        <h3>{dog.realName}</h3>
      </div>
      <Link to={`/femaleDog/${dog.name}`} className='btn-dog'>
        <button className='btn'>Zobacz więcej</button>
      </Link>
    </div>
  ))

  return (
    <div className="female-page">
      <h3 className='main-section-title'>Suki</h3>
      {cards}
    </div>
  );
}

export default FemalePage;