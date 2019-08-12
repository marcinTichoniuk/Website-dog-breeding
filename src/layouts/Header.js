import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeHeader from '../headers/HomeHeader';
import DogsHeader from '../headers/DogsHeader';
import FemaleHeader from '../headers/FemaleHeader';
import PuppiesHeader from '../headers/PuppiesHeader';
import ContactHeader from '../headers/ContactHeader';

// @TODO create error-header for wrong path
// @TODO add logo at the top of the page?

const routes = [
  { id: 101, path: '/', component: HomeHeader, exact: true },
  { id: 102, path: '/dogs', component: DogsHeader },
  { id: 103, path: '/femaleDogs', component: FemaleHeader },
  { id: 104, path: '/puppies', component: PuppiesHeader },
  { id: 105, path: '/contact', component: ContactHeader },
  { id: 106, path: null, component: HomeHeader },
]

const Header = () => {

  const routesMap = routes.map(route => (
    <Route
      key={route.id}
      path={route.path}
      exact={route.exact && route.exact}
      component={route.component}
    />
  ))

  return (
    <>
      <Switch>
        {routesMap}
      </Switch>
    </>
  )
}

export default Header;