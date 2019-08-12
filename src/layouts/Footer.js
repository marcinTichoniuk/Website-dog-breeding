import React from 'react';

const Footer = props => {
  return (
    <div className="footer">
      <div className="footer__creator">
        <span className="footer__line-text">created <strong>by eMTi</strong></span>
      </div>
      <div className="footer__media">
        <div className="footer__address">
          <p className="footer__info-text">Hodowla Valey of Borders</p>
          <p className="footer__info-text">ul. Pieska 34 </p>
          <p className="footer__info-text">02-509 Mazańcowice</p>
          <p className="footer__info-text">(Bielsko - Biała)</p>
        </div>
        <div className="footer__contact">
          <p className="footer__info-text">tel.: <strong>697 961 160</strong></p>
          <p className="footer__info-text">e-mail: <strong>valeyofborders@gmail.com</strong></p>
        </div>
        <div className="footer__logo">
          <h3 className="footer__logo-title">VoB</h3>
        </div>
        <div className="footer__socials">
          <span className="footer__social"><a className="footer__link" href="https://pl-pl.facebook.com/bordercollieBielsko/">{props.fb}</a></span>
          <span className="footer__social"><a className="footer__link" href="https://www.youtube.com/channel/UCV9EblO9ekB0tWh6-67inJw/videos">{props.yt}</a></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;