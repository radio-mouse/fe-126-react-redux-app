import React from "react";

import ProductsList from "components/ProductsList";

import { ReactComponent as Loader } from "assets/Loader.svg";
import { useProducts } from "helpers/hooks";

const Products = () => {
  const { items, loadMore, loading, allowLoadMore } = useProducts();

  return (
    <>
      <h1 className="display-1">Check Out Our Products</h1>
      <ProductsList products={items} />
      <div className="centered my-4 d-flex align-items-center justify-content-center">
        {allowLoadMore && !loading && (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-dark my-4 load-more"
          >
            Load More
          </button>
        )}
        {loading && <Loader />}
      </div>
    </>
  );
};

export default Products;
