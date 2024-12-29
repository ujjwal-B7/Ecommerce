import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdminLayout from "./layout/AdminLayout";
import SingleProductDetails from "./pages/SingleProductDetails";
import { Routes, Route } from "react-router-dom";
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
import Dashboard from "./pagesAdmin/Dashboard";
import Products from "./pagesAdmin/Products";
import SideBar from "./adminComponent/SideBar";
import AdminNav from "./adminComponent/AdminNav";
import Notifications from "./pagesAdmin/Notifications";
import Users from "./pagesAdmin/Users";
import Inbox from "./pagesAdmin/Orders";
import AddProduct from "./pagesAdmin/AddProduct";
import EditProducts from "./pagesAdmin/EditProducts";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const dispatch = useDispatch();
  const openQuickView = () => {
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    document.body.style.overflow = "auto";
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  // fetching stripe api key
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeApiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
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
            <Route exact path="/myOrders" element={<MyOrders />} />
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
        {/* <Route path="*" element={<Page404 />} /> */}

        {/* admin routes */}
        {/* <>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/notification" element={<Notifications />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/addProducts" element={<AddProduct />} />
          <Route path="/admin/editProducts/:id" element={<EditProducts />} />
          <Route path="/admin/user" element={<Users />} />
          <Route path="/admin/inbox" element={<Inbox />} />
        </> */}
      </Routes>
      {/* <AdminLayout /> */}
      {isAuthenticated && user.role === "admin" && <AdminLayout />}
      {/* {user && user.role === "user" && } */}
      <Footer />
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "#111827",
          padding: "5px",
          position: "fixed",
          left: "3rem",
          bottom: "1rem",
        }}
      />
    </div>
  );
}

export default App;
