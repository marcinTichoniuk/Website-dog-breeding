import React from 'react';

const ContactList = props => {
  return (
    <div className="contact__info">
      <p className="contact__text">W razie jakichkolwiek pytań prosimy o kontakt!</p>
      <ul className="contact__list">
        <li className="contact__item">{props.envelope}<strong className="contact__bold">valeyofborders@gmail.com</strong></li>
        <li className="contact__item">{props.phone}<strong className="contact__bold">697 961 160</strong></li>
        <li className="contact__item">{props.fb}<strong className="contact__bold"><a className="contact__link" href="https://pl-pl.facebook.com/bordercollieBielsko/">facebook</a></strong> </li>
      </ul>
    </div>
  );
}

export default ContactList;