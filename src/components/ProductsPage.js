import React, { useState } from 'react';
import products from '../products';
import ProductList from './ProductList';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Coupon from './Coupon';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
        <nav>
          <button 
            className={activeTab === 'products' ? 'active' : ''}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button 
            className={activeTab === 'cart' ? 'active' : ''}
            onClick={() => setActiveTab('cart')}
          >
            Cart
          </button>
          <button 
            className={activeTab === 'wishlist' ? 'active' : ''}
            onClick={() => setActiveTab('wishlist')}
          >
            Wishlist
          </button>
        </nav>
      </header>

      <main>
        {activeTab === 'products' && <ProductList products={products} />}
        {activeTab === 'cart' && <Cart />}
        {activeTab === 'wishlist' && <Wishlist />}
      </main>
    </div>
  );
};

export default ProductsPage;