import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "styles/main.scss";

import {
  ROUTE_HOME,
  ROUTE_PRODUCTS,
  ROUTE_CART,
  ROUTE_ABOUT,
  ROUTE_PRODUCT_DETAIL,
} from "helpers/constants";

import store from "redux/store";
import Navigation from "components/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Page404 from "pages/404";
import Products from "pages/Products";
import ProductDetail from "pages/ProductDetail";
import Cart from "pages/Cart";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <main className="container-sm py-4">
        <Switch>
          <Route exact component={Home} path={ROUTE_HOME} />
          <Route exact component={Products} path={ROUTE_PRODUCTS} />
          <Route component={ProductDetail} path={ROUTE_PRODUCT_DETAIL} />
          <Route component={About} path={ROUTE_ABOUT} />
          <Route component={Cart} path={ROUTE_CART} />
          <Route component={Page404} path="*" />
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>
);

export default App;
