import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import products from '../products';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';

const ProductsPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    if (cartItems.length > 0 && activeTab !== 'cart') {
      setActiveTab('cart');
    } else if (wishlistItems.length > 0 && activeTab !== 'wishlist') {
      setActiveTab('wishlist');
    } else if (cartItems.length === 0 && wishlistItems.length === 0 && activeTab !== 'products') {
      setActiveTab('products');
    }
  }, [cartItems.length, wishlistItems.length, activeTab]);

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
        {activeTab === 'products' && <ProductList products={products} />}
        {activeTab === 'cart' && <Cart />}
        {activeTab === 'wishlist' && <Wishlist />}
      </main>
    </div>
  );
};

export default ProductsPage;
