import React from 'react';
import '../styles/Footer.css'

const Footer = props => {
  return (
    <div className="footer">
      <div className="creator">
        <span>created <strong>by eMTi</strong></span>
      </div>
      <div className="media">
        <div className="address">
          <p>Hodowla Valey of Borders</p>
          <p>ul. Pieska 34 </p>
          <p>02-509 Mazańcowice</p>
          <p>(Bielsko - Biała)</p>
        </div>
        <div className="contact">
          <p>tel.: <strong>697 961 160</strong></p>
          <p>e-mail: <strong>valeyofborders@gmail.com</strong></p>
        </div>
        <div className="logo">
          <h3>VoB</h3>
        </div>
        <div className="social">
          <span><a href="https://pl-pl.facebook.com/bordercollieBielsko/">{props.fb}</a></span>
          <span><a href="https://www.youtube.com/channel/UCV9EblO9ekB0tWh6-67inJw/videos">{props.yt}</a></span>
        </div>
      </div>
    </div>
  );
}

export default Footer;