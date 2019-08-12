import React from 'react';
import { NavLink } from 'react-router-dom';


const list = [
  { name: 'strona główna', path: '/', exact: true },
  { name: 'psy', path: '/dogs' },
  { name: 'suki', path: '/femaleDogs' },
  { name: 'szczeniaki', path: '/puppies' },
  { name: 'kontakt', path: '/contact' },
]

const Navigation = props => {

  const menu = list.map((link, i) => (
    <li className="nav-desktop__item" key={link.name} style={{ animation: `move 0.5s ease forwards ${i / 7}s` }}>
      <NavLink className="nav-desktop__link" to={link.path} exact={link.exact && link.exact}>{link.name}</NavLink>
    </li>
  ))

  const menuMobile = list.map(link => (
    <li className="nav-mobile__item" key={link.name} >
      <NavLink className="nav-mobile__link" onClick={props.close} to={link.path} exact={link.exact && link.exact}>{link.name}</NavLink>
    </li>
  ))

  return (
    <>
      <nav className='nav-desktop header__nav-desktop'>
        <ul className='nav-desktop__menu'>
          {menu}
        </ul>
      </nav>
      <nav className={`nav-mobile header__nav-mobile ${props.classes}`}>
        <ul className='nav-mobile__menu'>
          {menuMobile}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

