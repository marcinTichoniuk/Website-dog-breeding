import React from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import file from '../data/data';

// @TODO change dog-lists? (make this as a card)

class DogPage extends React.Component {
  state = {
    name: '',
    description: '',
    birth: '',
    exams: '',
    titles: '',
    gallery: [],
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    const dog = file.dogs.find(dog => dog.name === id);
    this.setState({
      name: dog.name,
      description: dog.description,
      birth: dog.birth,
      exams: dog.exams,
      titles: dog.titles,
      gallery: dog.gallery,
    })
  }

  render() {
    const { name, description, birth, exams, titles, gallery } = this.state;
    return (
      <>
        <div className="page__dog">
          <h3 className="page__title">{name}</h3>
          <p className="page__description">{description}</p>
          <p className="page__description">Data ur. {birth}</p>
          <div className="page__lists">
            <p className="page__description">Badania: </p>
            <ul className="page__list">
              <li className="page__list-element">{exams}</li>
            </ul >
            {titles ?
              <>
                <p className="page__description">Tytuły: </p>
                <ul className="page__list">
                  <li className="page__list-element">{titles}</li>
                </ul>
              </> : null}
          </div>
          <div className="page__gallery">
            <ImageGallery items={gallery} />
          </div>
        </div>
        <Link to="/dogs" className="page__link">
          <button className="btn page__btn">Wróć</button>
        </Link>
      </>
    );
  }
}

export default DogPage;