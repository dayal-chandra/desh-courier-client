import React from "react";
import { Link, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 space-y-6">
        <div className="pb-2">
          <Link to="/" className="text-3xl font-bold text-black">
            Desh<span className="text-green-600">C</span>ourier
          </Link>
        </div>
        <nav className="flex flex-col space-y-3">
          <Link
            to="/admin/dashboard-home"
            className="text-gray-700 hover:text-green-600"
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/pending-riders"
            className="text-gray-700 hover:text-green-600"
          >
            🛵 Pending Riders
          </Link>
          <Link
            to="/admin/users"
            className="text-gray-700 hover:text-green-600"
          >
            👥 Users
          </Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
