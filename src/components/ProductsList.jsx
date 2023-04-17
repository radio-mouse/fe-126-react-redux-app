import React from "react";

import ProductCard from "./ProductCard";

const Products = ({ products }) => (
  <ul className="products-list">
    {products.map((product) => (
      <li key={product.slug}>
        <ProductCard product={product} />
      </li>
    ))}
  </ul>
);

export default Products;
