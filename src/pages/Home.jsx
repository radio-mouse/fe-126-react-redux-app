import React from "react";
import { Link } from "react-router-dom";

import { ABOUT, CART, CATEGORIES, PRODUCTS } from "../helpers/routes";

const Home = () => (
  <>
    <h1 className="display-1">Welcome to Our SPA Store</h1>
    <div className="row py-2">
      <div className="col">
        <h2 className="display-5">Checkout out the information below</h2>
        <p>
          Out store is one of the largest international fashion companies. It
          belongs to Inditex, one of the world’s largest distribution groups.
        </p>
        <p>
          The customer is at the heart of our unique business model, which
          includes design, production, distribution and sales through our
          extensive retail network.
        </p>
        <p>
          Redesigning Human Uniform - or RHU for short - was co-created by Zara
          and Rhuigi Villaseñor in 2022. By combining Villaseñor’s aesthetic
          with Zara’s global network and, their shared intention was to create a
          wardrobe infused with the qualities and codes of modern progressive
          luxury at a scale and price point that made it accessible to all.
          Following a first collection, Zara and Villaseñor have reunited to
          present a newly evolved and expanded edition of RHU’s contemporary
          “uniform”.
        </p>
      </div>
    </div>
    <div className="row py-2">
      <div className="col">
        <h2 className="display-5">Checkout our sections</h2>
        <ul className="list-unstyled">
          <li>
            <Link to={PRODUCTS}>Look our products here</Link>
          </li>
          <li>
            <Link to={CATEGORIES}>Look our categories here</Link>
          </li>
          <li>
            <Link to={ABOUT}>Some information about us</Link>
          </li>
          <li>
            <Link to={CART}>Check out your cart here</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Home;
