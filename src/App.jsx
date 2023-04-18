import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "styles/main.scss";

import {
  ROUTE_HOME,
  ROUTE_CATEGORIES,
  ROUTE_PRODUCTS,
  ROUTE_CART,
  ROUTE_ABOUT,
} from "helpers/routes";

import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Page404 from "pages/404";
import Products from "pages/Products";
import Categories from "pages/Categories";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <main className="container-sm py-4">
      <Switch>
        <Route exact component={Home} path={ROUTE_HOME} />
        <Route exact component={Products} path={ROUTE_PRODUCTS} />
        <Route exact component={Categories} path={ROUTE_CATEGORIES} />
        <Route path={ROUTE_CATEGORIES}>
          <h1 className="display-1">Categories</h1>
        </Route>
        <Route component={About} path={ROUTE_ABOUT} />
        <Route path={ROUTE_CART}>
          <h1 className="display-1">Cart</h1>
        </Route>
        <Route component={Page404} path="*" />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
