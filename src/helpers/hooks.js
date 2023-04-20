import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "redux/productsSlice";
import { addProduct, deleteProduct } from "redux/cartSlice";

export const useCart = (product) => {
  const dispatch = useDispatch();
  const items = useSelector(({ cart }) => cart);

  return {
    items,
    count: items.length,
    isInCart: items.some(({ slug }) => slug === product?.slug),
    addProduct: () => dispatch(addProduct(product)),
    deleteProduct: () => dispatch(deleteProduct(product)),
  };
};

export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { items, page } = useSelector(({ products }) => products);

  const loadItems = () => {
    setLoading(true);

    dispatch(getProducts(page)).then(() => setLoading(false));
  };

  useEffect(() => {
    if (page === 1) {
      loadItems();
    }
  }, [dispatch]);

  return { loading, items, loadMore: loadItems, allowLoadMore: !!page };
};

export const useDetailProduct = (productId) => {
  const { items } = useSelector(({ products }) => products);

  const [product, setProduct] = useState(
    items.find(({ slug }) => slug === productId)
  );

  useEffect(() => {
    fetch(`https://api.storerestapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => setProduct(json.data));
  }, [productId]);

  return product;
};
