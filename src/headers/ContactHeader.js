import React from 'react';

// @TODO add different description in <p><p/>

const ContactHeader = () => {
  return (
    <div className="header__text-container">
      <h1 className='header__title'>Skontaktuj się z nami</h1>
      <p className="header__text">Mieszkamy we wsi Mazańcowice pod Bielskiem-Białym. Zapraszamy serdecznie na wizytę!</p>
    </div>
  );
}

export default ContactHeader;


// componentDidMount: function() {
//   window.addEventListener('scroll', this.handleScroll);
// },

// componentWillUnmount: function() {
//     window.removeEventListener('scroll', this.handleScroll);
// },

// handleScroll: function(event) {
//     let scrollTop = event.srcElement.body.scrollTop,
//         itemTranslate = Math.min(0, scrollTop/3 - 60);

//     this.setState({
//       transform: itemTranslate
//     });
// },