import React from 'react';
import { Link } from 'react-router-dom';

import file from '../data/data.js';

// srcSet={`${dog.imgM} 400w`}

// @TODO add srcSet and different size images

const DogsPage = () => {

  const cards = file.dogs.map(dog => (
    <div key={dog.id} className="card">
      <Link to={`/dog/${dog.name}`} className="card__container">
        <img className="card__img" src={dog.img} srcSet={`${dog.imgM} 400w`} alt="border" />
      </Link>
      <div className="card__text">
        <h1 className="card__info card__info--border">{dog.name}</h1>
        {dog.title && <h1 className="card__info">{dog.title}</h1>}
        <h3 className="card__small-info">{dog.realName}</h3>
      </div>
      <Link to={`/dog/${dog.name}`} className="card__link">
        <button className="btn">Zobacz więcej</button>
      </Link>
    </div >
  ))


  return (
    <div className="page__dogs">
      <h3 className='page__title'>Psy</h3>
      {cards}
    </div>
  );
}

export default DogsPage;