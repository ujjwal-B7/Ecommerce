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
import axios from "axios";
import { useEffect, useState } from "react";
import { store } from "./store/app/store";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./store/actions/userAction";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePassword from "./pages/UpdatePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ShippingInfo from "./pages/ShippingInfo";
import Page404 from "./pages/Page404";
import ConfirmOrder from "./pages/ConfirmOrder";
import Payment from "./pages/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyOrders from "./pages/MyOrders";

function App() {
  const dispatch = useDispatch();
  const openQuickView = () => {
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    document.body.style.overflow = "auto";
  };

  const { isAuthenticated } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  // fetching stripe api key
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeApiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    isAuthenticated && getStripeApiKey();
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
          <>
            <Route exact path="/profile" element={<Profile />} />

            <Route exact path="/updateProfile" element={<UpdateProfile />} />

            <Route exact path="/updatePassword" element={<UpdatePassword />} />

            <Route exact path="/shippingInfo" element={<ShippingInfo />} />
            <Route exact path="/confirmOrder" element={<ConfirmOrder />} />
            <Route exact path="/success" element={<MyOrders />} />
            <Route
              exact
              path="/orderPayment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                </Elements>
              }
            />
          </>
        )}
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword/:token" element={<ResetPassword />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <AdminLayout />
      <Footer />
    </div>
  );
}

export default App;
