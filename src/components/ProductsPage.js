import React from "react";
import products from "../products";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const ProductsPage = () => {
  return (
    <>
      <ProductList products={products} />
      <Cart />
      <Wishlist />
    </>
  );
};

export default ProductsPage;
