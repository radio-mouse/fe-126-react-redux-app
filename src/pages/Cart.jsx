import React from "react";

import { useCart } from "helpers/hooks";

import ProductsList from "components/ProductsList";

const Cart = () => {
  const { items, count } = useCart();

  return (
    <>
      <h1 className="display-1">Your Products</h1>
      {count ? (
        <ProductsList products={items} isCart />
      ) : (
        <h5 className="card-title">You don&apos;t have any products yet</h5>
      )}
    </>
  );
};

export default Cart;
