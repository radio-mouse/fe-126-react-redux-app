import React from "react";

import { useCart } from "helpers/hooks";

const CartButton = ({ isCart, product }) => {
  const { isInCart, addProduct, deleteProduct } = useCart(product);

  return (
    <button
      disabled={isInCart && !isCart}
      onClick={() => (isInCart ? deleteProduct() : addProduct())}
      type="button"
      className={`btn btn-${isCart ? "danger" : "primary"}`}
    >
      {isCart && "Delete"}
      {!isCart && (isInCart ? "Already In Cart" : "Add to cart")}
    </button>
  );
};

export default CartButton;
