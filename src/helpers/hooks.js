import { useEffect, useState } from "react";

export const useGetDetailProduct = (productId) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://api.storerestapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => setProduct(json.data));
  }, [productId]);

  const { title, createdBy, price } = product ?? {};
  const { name } = createdBy ?? {};

  return { title, price, name, loading: !product };
};

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [wasLoaded, setWasLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadProducts = () => {
    setLoading(true);

    fetch(`https://api.storerestapi.com/products?limit=4&page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        const { data, metadata } = json;
        const { nextPage } = metadata;

        setProducts((prev) => prev.concat(data));
        if (nextPage) {
          setPage(metadata.nextPage);
        } else {
          setWasLoaded(true);
        }
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, wasLoaded, loadMore: loadProducts };
};
