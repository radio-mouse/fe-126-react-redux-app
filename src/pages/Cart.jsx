import React from "react";

import ProductsList from "components/ProductsList";
import { PRODUCTS } from "helpers/constants";

const Cart = () => (
  <>
    <h1 className="display-1">Your Products</h1>
    <ProductsList products={PRODUCTS} isCart />
  </>
);

export default Cart;
