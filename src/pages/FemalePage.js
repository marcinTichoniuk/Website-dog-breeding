import React from 'react';
import { Link } from 'react-router-dom';

import file from '../data/data';

// @TODO add srcSet and different size images

const FemalePage = () => {

  const cards = file.femaleDogs.map(dog => (
    <div key={dog.id} className="card">
      <Link to={`/femaleDog/${dog.name}`} className="card__container">
        <img className="card__img" src={dog.img} alt="border" />
      </Link>
      <div className="card__text">
        <h1 className="card__info card__info--border">{dog.name}</h1>
        {dog.title && <h1 className="card__info">{dog.title}</h1>}
        <h3 className="card__small-info">{dog.realName}</h3>
      </div>
      <Link to={`/femaleDog/${dog.name}`} className="card__link">
        <button className="btn">Zobacz więcej</button>
      </Link>
    </div>
  ))

  return (
    <div className="page__dogs">
      <h3 className='page__title'>Suki</h3>
      {cards}
    </div>
  );
}

export default FemalePage;