import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationLink = ({ route, children }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={`nav-link ${pathname === route ? "active" : ""}`}
      to={route}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
