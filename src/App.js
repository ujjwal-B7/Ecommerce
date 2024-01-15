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
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { store } from "./store/app/store";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./store/actions/userAction";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePassword from "./pages/UpdatePassword";
function App() {
  const dispatch = useDispatch();
  const openQuickView = () => {
    document.body.style.overflow = "hidden";
  };
  const closeQuickView = () => {
    document.body.style.overflow = "auto";
  };
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
          {isAuthenticated && (
            <Route exact path="/profile" element={<Profile />} />
          )}
          {isAuthenticated && (
            <Route exact path="/updateProfile" element={<UpdateProfile />} />
          )}
          {isAuthenticated && (
            <Route exact path="/updatePassword" element={<UpdatePassword />} />
          )}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <AdminLayout />
        <Footer />
      </div>
    );
}

export default App;
