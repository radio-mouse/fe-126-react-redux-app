import React from "react";
import { Link } from "react-router-dom";

import { HOME } from "../helpers/routes";

const Page404 = () => (
  <>
    <h1 className="display-1">The Page Is Not Found</h1>
    <p>
      You are able to go to the <Link to={HOME}>Home page</Link>
    </p>
  </>
);

export default Page404;
