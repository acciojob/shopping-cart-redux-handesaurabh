import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import ProductsPage from "./ProductsPage";
import "../styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <nav className="navbar-expand-lg">
        <div className="text-center">Shopping Cart</div>
      </nav>

      <div></div>

      <div>
        <h3>All Products</h3>
        <ProductsPage />
      </div>
    </Provider>
  );
};

export default App;
