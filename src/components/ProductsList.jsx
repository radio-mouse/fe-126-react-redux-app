import React from "react";

import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => (
  <ul className="products-list">
    {products.map((product) => (
      <li key={product.slug}>
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);

export default ProductsList;
