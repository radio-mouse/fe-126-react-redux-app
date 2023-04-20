import { configureStore } from "@reduxjs/toolkit";

import cart from "redux/cartSlice";
import products from "redux/productsSlice";

export default configureStore({ reducer: { cart, products } });
