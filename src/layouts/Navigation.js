import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';

const list = [
  { name: 'strona główna', path: '/', exact: true },
  { name: 'psy', path: '/dogs' },
  { name: 'suki', path: '/femaleDogs' },
  { name: 'szczeniaki', path: '/puppies' },
  { name: 'kontakt', path: '/contact' },
]

const Navigation = props => {

  const menu = list.map((link, i) => (
    <li key={link.name} style={{ animation: `move 0.5s ease forwards ${i / 7}s` }}>
      <NavLink to={link.path} exact={link.exact && link.exact}>{link.name}</NavLink>
    </li>
  ))

  const menuMobile = list.map(link => (
    <li key={link.name} >
      <NavLink onClick={props.close} to={link.path} exact={link.exact && link.exact}>{link.name}</NavLink>
    </li>
  ))

  return (
    <>
      <nav className='main__nav main__nav-desktop'>
        <ul className='menu-desktop'>
          {menu}
        </ul>
      </nav>
      <nav className={`main__nav main__nav-mobile ${props.classes}`}>
        <ul className='menu-mobile'>
          {menuMobile}
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

