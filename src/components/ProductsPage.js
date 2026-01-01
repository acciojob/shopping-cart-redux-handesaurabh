import React from "react";
import products from "../products";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const ProductsPage = () => {
  return (
    <div className="container">
      <ProductList products={products} />
      <Cart />
      <Wishlist />
    </div>
  );
};

export default ProductsPage;
