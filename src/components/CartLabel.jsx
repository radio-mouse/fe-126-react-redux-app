import React from "react";

import { useCart } from "helpers/hooks";

const CartLabel = () => {
  const { count } = useCart();

  return <span className="badge bg-secondary">{count}</span>;
};

export default CartLabel;
