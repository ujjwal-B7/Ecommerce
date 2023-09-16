import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pagesAdmin/Dashboard";
import Notifications from "../pagesAdmin/Notifications";
import Products from "../pagesAdmin/Products";
import Users from "../pagesAdmin/Users";
import Inbox from "../pagesAdmin/Inbox";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <AdminNav />
      <SideBar />
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
