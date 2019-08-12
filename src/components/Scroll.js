import React from 'react';

const Scroll = props => {
  return (
    <div onClick={props.click} className="scroll header__scroll">
      {props.arrow}
    </div>
  );
}

export default Scroll;