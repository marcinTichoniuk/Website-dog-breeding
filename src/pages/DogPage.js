import React from 'react';
import { Link } from 'react-router-dom';

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import '../styles/OneDog.css';

import file from '../data/data';

// @TODO change dog-lists? (make this as a card)

const DogPage = props => {
  // console.log(props)
  const chooseGallery = (dogName) => {
    const chosenDog = file.dogs.filter(dog => dog.name === dogName);

    const chosenDogInfo = chosenDog.map(dog => (
      <div key={dog.id} className="one-dog">
        <h3 className='main-section-title'>{dog.name}</h3>
        <p>{dog.description}</p>
        <p>Data ur. {dog.birth}</p>
        <div className="lists">
          <p>Badania: </p>
          <ul>
            <li>{dog.exams}</li>
          </ul>
          {dog.titles ?
            <>
              <p>Tytuły: </p>
              <ul>
                <li>{dog.titles}</li>
              </ul>
            </> :
            null}
        </div>
        <div className="gallery">
          <ImageGallery items={dog.gallery} />
        </div>
      </div>
    ))
    return chosenDogInfo;
  }

  return (
    <>
      {chooseGallery(props.match.params.id)}
      <Link to="/dogs" className='btn-link'>
        <button className='btn btn-back'>Wróć</button>
      </Link>
    </>
  );
}

export default DogPage;