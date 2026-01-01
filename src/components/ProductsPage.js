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
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <ProductList products={products} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <Wishlist />
              </div>
              <div className="col-md-12">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
