import React from 'react';

import img1 from '../images/borderBack.jpg'

const HomePage = () => {

  return (
    <div className="page__about-us">
      <h3 className="page__title">O nas</h3>
      <p className="page__text">Mieszkamy w <strong>okolicach Bielska - Białej</strong>, we wsi <strong>Mazańcowice</strong> wraz ze stadkiem wspaniałych borderów. Najstarszy w stadzie jest Aris Junior, który przyjechał do nas z hodowli Energizer. Jest to piękny pies, o wspaniałym temperamencie. Rok później, z hodowli Never Never Land, przybyła do nas suczka Prissi. Jest to typowy border, któremu radość sprawia praca i zabawa z człowiekiem. Kolejny członek stada to "G" - córka naszej Prissi i Arisa Jr. G - to mały diabeł w borderzej skórze, który przypadkiem tylko w "dowodzie" ma wpis - Angel! Kora, córka Prissi z drugiego miotu, tak jak nam się wydawało, ma naturę sportowca. Trenuje w krakowskim klubie flyball, a jednocześnie nieźle sobie radzi na wystawach. Ostatnio do nas dołączył Fredy z hodowli The Best Of Gajowy. Serdecznie został przyjęty przez całe stado i teraz wspólnie broją i budzą uśmiech!</p>
      <div className="team-container">
        <div className="team-container__single">
          <img className="team-container__img" src={img1} alt="My" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;