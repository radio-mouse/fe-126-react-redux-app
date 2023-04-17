import React from "react";

import ProductsList from "../components/ProductsList";

const PRODUCTS = [
  {
    title: "Test Card One",
    createdBy: { name: "Alexander" },
    price: 68,
    slug: "test-card-one",
  },
  {
    title: "Test Card Two",
    createdBy: { name: "Jake" },
    price: 82,
    slug: "test-card-two",
  },
  {
    title: "Test Card Three",
    createdBy: { name: "Matthew" },
    price: 51,
    slug: "test-card-three",
  },
];

const Products = () => (
  <>
    <h1 className="display-1">Check Out Our Products</h1>
    <ProductsList products={PRODUCTS} />
  </>
);

export default Products;
