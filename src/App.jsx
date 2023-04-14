import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/main.scss';

import { ABOUT, CATEGORIES, HOME, PRODUCTS, CART } from './helpers/routes';

import Navigation from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <main className="container-sm py-4">
      <Switch>
        <Route exact path={HOME}><h1 className="display-1">Home</h1></Route>
        <Route path={PRODUCTS}><h1 className="display-1">Products</h1></Route>
        <Route path={CATEGORIES}><h1 className="display-1">Categories</h1></Route>
        <Route path={ABOUT}><h1 className="display-1">About</h1></Route>
        <Route path={CART}><h1 className="display-1">Cart</h1></Route>
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
