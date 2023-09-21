import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
import { Routes, Route, useLocation } from "react-router-dom"; // Import useLocation
import Dashboard from "../pagesAdmin/Dashboard";
import Notifications from "../pagesAdmin/Notifications";
import Products from "../pagesAdmin/Products";
import Users from "../pagesAdmin/Users";
import Inbox from "../pagesAdmin/Inbox";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();

  // Define an array of paths where the sidebar should be visible (admin paths)
  const adminPaths = [
    "/admin",
    "/admin/notification",
    "/admin/product",
    "/admin/user",
    "/admin/inbox",
  ];

  // Check if the current location is in the adminPaths array
  const isOnAdminPage = adminPaths.includes(location.pathname);

  return (
    <div className="grid grid-cols-12 bg-gray-50">
      {/* Conditionally render the admin sidebar and navbar */}
      {isOnAdminPage && <AdminNav />}
      {isOnAdminPage && <SideBar />}

      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/notification" element={<Notifications />} />
        <Route path="/admin/product" element={<Products />} />
        <Route path="/admin/user" element={<Users />} />
        <Route path="/admin/inbox" element={<Inbox />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
