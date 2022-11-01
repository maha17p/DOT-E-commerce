import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfileSharedLayout from "./components/Layout/ProfileSharedLayout";
import {
  CategoryItemPage,
  CategoryPage,
  CreateProductsPage,
  ForgotPage,
  HomePage,
  LoginPage,
  MyAddress,
  NotFound,
  PaymentPage,
  ProductCreation,
  ProductDetails,
  ProductsPage,
  ProfilePage,
  RegisterPage,
  SingleUserOrder,
  ViewOrders,
} from "./pages";
import ActivationEmail from "./pages/ActivationEmail/ActivationEmail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot" element={<ForgotPage />} />
      <Route
        path="/user/activate/:activation_token"
        element={<ActivationEmail />}
      />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/create_product" element={<ProductCreation />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:category" element={<CategoryItemPage />} />
      <Route path="/products/product_details/:id" element={<ProductDetails />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/orders" element={<ViewOrders />} />
      <Route path="/orders/:id" element={<SingleUserOrder />} />
      <Route path="/profile" element={<ProfileSharedLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path="address" element={<MyAddress />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
