import { configureStore } from "@reduxjs/toolkit";

import cart from "redux/cartSlice";

export default configureStore({ reducer: { cart } });
