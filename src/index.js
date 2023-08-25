import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { fetchProducts } from "./features/product/productSlice";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { apiSlice } from "./api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Auth0Provider
        domain="dev-8j1g5m4pf54j7oxi.us.auth0.com"
        clientId="ioIwignsrUs8xTy7OVLbidiR64nmTJZn"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </ApiProvider>
  </React.StrictMode>
);
