import React from 'react';

const ContactList = props => {
  return (
    <div className="contact-list">
      <p>W razie jakichkolwiek pytań prosimy o kontakt!</p>
      <ul>
        <li>{props.envelope}<strong>valeyofborders@gmail.com</strong></li>
        <li>{props.phone}<strong>697 961 160</strong></li>
        <li>{props.fb}<strong><a href="https://pl-pl.facebook.com/bordercollieBielsko/">facebook</a></strong> </li>
      </ul>
    </div>
  );
}

export default ContactList;