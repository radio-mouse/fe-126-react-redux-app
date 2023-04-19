import React from "react";

import ProductCard from "./ProductCard";

const ProductsList = ({ products, isCart }) => (
  <ul className="products-list">
    {products.map((product) => (
      <li key={product.slug}>
        <ProductCard isCart={isCart} product={product} />
      </li>
    ))}
  </ul>
);

export default ProductsList;
