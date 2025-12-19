import React, { useState } from 'react';
import products from '../products';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="text-center">
          <h1 className="display-4">Shopping Cart</h1>
          <div className="btn-group" role="group">
            <button 
              className={`btn ${activeTab === 'products' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('products')}
            >
              All Products
            </button>
            <button 
              className={`btn ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('cart')}
            >
              Cart
            </button>
            <button 
              className={`btn ${activeTab === 'wishlist' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        {activeTab === 'products' && (
          <>
            <h3>All Products</h3>
            <ProductList products={products} />
          </>
        )}
        {activeTab === 'cart' && <Cart />}
        {activeTab === 'wishlist' && <Wishlist />}
      </main>
    </div>
  );
};

export default ProductsPage;