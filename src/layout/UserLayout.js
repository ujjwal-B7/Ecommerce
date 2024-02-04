import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Dashboard from "../pagesAdmin/Dashboard";
import Products from "../pagesAdmin/Products";
import Notifications from "../pagesAdmin/Notifications";
import Users from "../pagesAdmin/Users";
import Inbox from "../pagesAdmin/Inbox";
import AddProduct from "../pagesAdmin/AddProduct";
import EditProducts from "../pagesAdmin/EditProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default UserLayout;
