import React from "react";
import { useParams } from "react-router-dom";

import { ReactComponent as Loader } from "assets/Loader.svg";
import { useGetDetailProduct } from "helpers/hooks";

const ProductDetail = () => {
  const { productId } = useParams();
  const { title, name, price, loading } = useGetDetailProduct(productId);

  return !loading ? (
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
  ) : (
    <div className="centered my-4 d-flex align-items-center justify-content-center">
      <Loader />
    </div>
  );
};

export default ProductDetail;
