import React from "react";
import AdminNav from "../adminComponent/AdminNav";
import SideBar from "../adminComponent/SideBar";
const AdminLayout = () => {
  return (
    <div>
      <AdminNav />
      <main>
        <SideBar />
      </main>
    </div>
  );
};

export default AdminLayout;
