import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import Burger from '../components/Burger';
import Scroll from '../components/Scroll';

import '../css/main.css';


class App extends React.Component {
  state = {
    isOpen: false,
  }

  myRef = React.createRef();

  handleScrollTo = () => {
    window.scrollTo({
      top: this.myRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  handleClickBurger = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleCloseMenu = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {

    const arrow = <FontAwesomeIcon icon={faArrowDown} />
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const yt = <FontAwesomeIcon icon={faYoutube} />

    const classes = [];

    if (this.state.isOpen) {
      classes.push('active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return (
      <Router>
        <div className="wrapper">
          <header className="header">
            {<Burger click={this.handleClickBurger} classes={classes.join(' ')} />}
            {<Header />}
            {<Navigation classes={classes.join(' ')} close={this.handleCloseMenu} />}
            {<Scroll click={this.handleScrollTo} arrow={arrow} />}
          </header>
          <main className="main">
            <section className="page" ref={this.myRef}>
              {<Page location={location} envelope={envelope} phone={phone} fb={facebook} />}
            </section>
          </main>
          <footer className="app-footer">
            {<Footer fb={facebook} yt={yt} />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
