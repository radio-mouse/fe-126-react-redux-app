import React from "react";

import { ReactComponent as Loader } from "assets/Loader.svg";

import ProductsList from "components/ProductsList";
import { PRODUCTS } from "helpers/constants";

const Products = () => (
  <>
    <h1 className="display-1">Check Out Our Products</h1>
    <ProductsList products={PRODUCTS} />
    <div className="centered my-4 d-flex align-items-center justify-content-center">
      <button type="button" className="btn btn-dark my-4 load-more">
        Load More
      </button>
      <Loader />
    </div>
  </>
);

export default Products;
