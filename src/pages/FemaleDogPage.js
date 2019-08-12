import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import file from '../data/data';

const FemaleDogPage = props => {

  const chooseGallery = (dogName) => {
    const chosenDog = file.femaleDogs.filter(dog => dog.name === dogName);

    const chosenDogInfo = chosenDog.map(dog => (
      <div key={dog.id} className="page__dog">
        <h3 className="page__title">{dog.name}</h3>
        <p className="page__description">{dog.description}</p>
        <p className="page__description">Data ur. {dog.birth}</p>
        <div className="page__lists">
          <p className="page__description">Badania: </p>
          <ul className="page__list">
            <li className="page__list-element">{dog.exams}</li>
          </ul >
          {dog.titles ?
            <>
              <p className="page__description">Tytuły: </p>
              <ul className="page__list">
                <li className="page__list-element">{dog.titles}</li>
              </ul>
            </> : null}
        </div>
        <div className="page__gallery">
          <ImageGallery items={dog.gallery} />
        </div>
      </div>
    ))
    return chosenDogInfo;
  }

  return (
    <>
      {chooseGallery(props.match.params.id)}
      <Link to="/femaleDogs" className="page__link">
        <button className="btn page__btn">Wróć</button>
      </Link>
    </>
  );
}

export default FemaleDogPage;