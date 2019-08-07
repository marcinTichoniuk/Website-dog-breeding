import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import DogsPage from '../pages/DogsPage';
import DogPage from '../pages/DogPage';
import FemalePage from '../pages/FemalePage';
import FemaleDogPage from '../pages/FemaleDogPage';
import PuppiesPage from '../pages/PuppiesPage';
import ContactPage from '../pages/ContactPage';

const routes = [
  { id: 201, path: '/', exact: true, component: HomePage },
  { id: 202, path: '/dogs', component: DogsPage },
  { id: 203, path: '/dog/:id', component: DogPage },
  { id: 204, path: '/femaleDogs', component: FemalePage },
  { id: 205, path: '/femaleDog/:id', component: FemaleDogPage },
  { id: 206, path: '/puppies', component: PuppiesPage },
  { id: 207, path: '/contact', component: ContactPage },
  { id: 208, path: null, component: HomePage },
]

const Page = props => {

  const { location, envelope, phone, fb } = props;

  const routesMap = routes.map(route => (
    <Route
      key={route.id}
      path={route.path}
      exact={route.exact && route.exact}
      component={(props) => <route.component {...props} location={location} envelope={envelope} phone={phone} fb={fb} />}
    />
  ))

  return (
    <>
      <Switch>
        {routesMap}
      </Switch>
    </>
  );
}

export default Page;