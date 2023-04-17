import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/main.scss";

import { ABOUT, CATEGORIES, HOME, PRODUCTS, CART } from "./helpers/routes";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/404";

const App = () => (
  <BrowserRouter>
    <Navigation />
    <main className="container-sm py-4">
      <Switch>
        <Route exact component={Home} path={HOME} />
        <Route path={PRODUCTS}>
          <h1 className="display-1">Products</h1>
        </Route>
        <Route path={CATEGORIES}>
          <h1 className="display-1">Categories</h1>
        </Route>
        <Route path={ABOUT} component={About} />
        <Route path={CART}>
          <h1 className="display-1">Cart</h1>
        </Route>
        <Route path="*" component={Page404} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
