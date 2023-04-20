import React from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Loader } from "assets/Loader.svg";
import { useDetailProduct } from "helpers/hooks";

import CartButton from "components/CartButton";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = useDetailProduct(productId);

  const { title, createdBy, price } = product ?? {};
  const { name } = createdBy ?? {};

  return product ? (
    <>
      <h1 className="display-1">{title}</h1>
      <p>By {name}</p>
      <span className="display-6">${price}</span>
      <div className="centered my-4 d-flex align-items-center justify-content-center">
        <CartButton product={product} />
      </div>
    </>
  ) : (
    <div className="centered my-4 d-flex align-items-center justify-content-center">
      <Loader />
    </div>
  );
};

export default ProductDetail;
