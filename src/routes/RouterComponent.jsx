import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../components/login";
import ProductList from "../components/product";
import ProductForm from "../components/product/productForm";
import PrivateRoute from "./PrivateRoute";
import Layout from "../components/navbar";

const RouterComponent = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              token ? <Navigate to="/products" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />
          <Route
            path="product-form"
            element={
              <PrivateRoute>
                <ProductForm />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
