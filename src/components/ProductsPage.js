import React from 'react';
import products from '../products';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';

const ProductsPage = () => {
  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="text-center w-100">
          <h1 className="display-4">Shopping Cart</h1>
        </div>
      </nav>

      <main className="container mt-4">
        <ProductList products={products} />
        <Cart />
        <Wishlist />
      </main>
    </div>
  );
};

export default ProductsPage;
