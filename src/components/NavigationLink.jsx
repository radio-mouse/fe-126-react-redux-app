import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTE_HOME } from "../helpers/routes";

const NavigationLink = ({ route, children }) => {
  const { pathname } = useLocation();

  const isActive =
    route === ROUTE_HOME ? route === pathname : pathname.includes(route);

  return (
    <Link className={`nav-link ${isActive ? "active" : ""}`} to={route}>
      {children}
    </Link>
  );
};

export default NavigationLink;
