import React from "react";
import { Link } from "react-router-dom";

import {
  ROUTE_ABOUT,
  ROUTE_CART,
  ROUTE_HOME,
  ROUTE_PRODUCTS,
} from "helpers/constants";

import NavigationLink from "./NavigationLink";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-sm">
      <Link className="navbar-brand" to={ROUTE_HOME}>
        SPA SHOP
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" id="nav-list">
          <li className="nav-item">
            <NavigationLink route={ROUTE_HOME}>Home</NavigationLink>
          </li>
          <li className="nav-item">
            <NavigationLink route={ROUTE_PRODUCTS}>Products</NavigationLink>
          </li>
          <li className="nav-item">
            <NavigationLink route={ROUTE_ABOUT}>About</NavigationLink>
          </li>
          <li className="nav-item">
            <NavigationLink route={ROUTE_CART}>
              Cart&nbsp;
              <span className="badge bg-secondary">0</span>
            </NavigationLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
