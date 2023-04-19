import React from "react";

import { PRODUCTS } from "helpers/constants";

const ProductDetail = () => {
  const {
    title,
    createdBy: { name },
    price,
  } = PRODUCTS[0];

  return (
    <>
      <h1 className="display-1">{title}</h1>
      <p>By {name}</p>
      <span className="display-6">${price}</span>
      <div className="centered my-4 d-flex align-items-center justify-content-center">
        <button type="button" className="btn btn-primary">
          Add to card
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
