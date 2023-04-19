import React from "react";

import { ReactComponent as Loader } from "assets/Loader.svg";

import ProductsList from "components/ProductsList";
import { useGetProducts } from "helpers/hooks";

const Products = () => {
  const { products, loading, wasLoaded, loadMore } = useGetProducts();

  return (
    <>
      <h1 className="display-1">Check Out Our Products</h1>
      <ProductsList products={products} />
      <div className="centered my-4 d-flex align-items-center justify-content-center">
        {!wasLoaded && !loading && (
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
