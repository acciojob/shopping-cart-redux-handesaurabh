import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import ProductsPage from "./ProductsPage";
import "../styles/App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div></div>
      <div>
        <h3>All Products</h3>
        <ProductsPage />
      </div>
    </Provider>
  );
};

export default App;
