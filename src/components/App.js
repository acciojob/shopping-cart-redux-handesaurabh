import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import ProductsPage from "./ProductsPage";
import "../styles/App.css";

const AppContent = () => {
  return (
    <>
      {/* Child 1 */}
      <nav className="navbar-expand-lg">
        <div className="text-center">Shopping Cart</div>
      </nav>

      {/* Child 2 */}
      <div>
        <div>
          <h3>All Products</h3>
          <ProductsPage />
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
