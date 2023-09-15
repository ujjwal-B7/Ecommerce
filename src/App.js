import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminNav from "./adminComponent/AdminNav";
import AdminLayout from "./layout/AdminLayout";
import SideBar from "./adminComponent/SideBar";

import { Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route
          exact
          path="/admin"
          element={
            <AdminLayout>
              <Route exact path="/adminNav" element={<AdminNav />} />
              <Route exact path="/sidebar" element={<SideBar />} />
            </AdminLayout>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
