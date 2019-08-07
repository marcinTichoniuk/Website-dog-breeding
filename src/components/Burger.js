import React from 'react';

import '../styles/Burger.css'

const Burger = props => {
  return (
    <div className={`burger ${props.classes}`} onClick={props.click} >
      <div className="burger-item"></div>
    </div>
  );
}

export default Burger;