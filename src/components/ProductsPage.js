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
      <div>
        <div>
          <h3>Shopping Cart</h3>
          <div>
            <button 
              className={activeTab === 'products' ? 'btn-primary' : ''}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button 
              className={activeTab === 'cart' ? 'btn-primary' : ''}
              onClick={() => setActiveTab('cart')}
            >
              Cart
            </button>
            <button 
              className={activeTab === 'wishlist' ? 'btn-primary' : ''}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <div>
        {activeTab === 'products' && <ProductList products={products} />}
        {activeTab === 'cart' && <Cart />}
        {activeTab === 'wishlist' && <Wishlist />}
      </div>
    </div>
  );
};

export default ProductsPage;