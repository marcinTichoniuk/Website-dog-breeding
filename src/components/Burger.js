import React from 'react';


const Burger = props => {
  return (
    <div className={`burger header__burger ${props.classes}`} onClick={props.click} >
      <div className="burger__item"></div>
    </div>
  );
}

export default Burger;