
import React from "react";
import { Provider } from 'react-redux';
import store from '../store';
import './../styles/App.css';
import ProductsPage from './ProductsPage';

const App = () => {
  return (
    <Provider store={store}>
      <div id="root">
        <div></div>
        <div>
          <div>
          </div>
          <ProductsPage />
        </div>
      </div>
    </Provider>
  )
}

export default App
