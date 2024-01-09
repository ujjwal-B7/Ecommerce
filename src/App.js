import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminNav from "./adminComponent/AdminNav";
import AdminLayout from "./layout/AdminLayout";
import SideBar from "./adminComponent/SideBar";
import Dashboard from "./pagesAdmin/Dashboard";
import SingleProductDetails from "./pages/SingleProductDetails";

import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const openQuickView = () => {
    document.body.style.overflow = "hidden";
  };
  const closeQuickView = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              openQuickView={openQuickView}
              closeQuickView={closeQuickView}
            />
          }
        />
        <Route
          exact
          path="/store"
          element={
            <Store
              openQuickView={openQuickView}
              closeQuickView={closeQuickView}
            />
          }
        />
        <Route path="/store/:keyword" element={<Store />} />
        <Route exact path="/product/:id" element={<SingleProductDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <AdminLayout />
      <Footer />
    </div>
  );
}

export default App;
