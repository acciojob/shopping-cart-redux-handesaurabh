import React from "react";
import products from "../products";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const ProductsPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="text-center">
          <h1>Shopping Cart</h1>
        </div>
      </nav>
      <div className="container">
        <ProductList products={products} />
        <Cart />
        <Wishlist />
      </div>
    </div>
  );
};

export default ProductsPage;
