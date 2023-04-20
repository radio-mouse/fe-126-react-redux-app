import React from "react";
import { Link } from "react-router-dom";

import { ROUTE_PRODUCTS } from "helpers/constants";
import CartButton from "./CartButton";

const ProductCard = ({ product, isCart }) => {
  const { slug, title, price, createdBy } = product;
  const { name } = createdBy;

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <Link className="card-title" to={`${ROUTE_PRODUCTS}/${slug}`}>
            <h5 className="card-title">{title}</h5>
          </Link>
          {name && <p className="card-text">By {name}</p>}
          <span className="display-6">${price}</span>
        </div>
        <CartButton product={product} isCart={isCart} />
      </div>
    </div>
  );
};

export default ProductCard;
