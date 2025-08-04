import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 h-screen shadow-lg p-5 space-y-6 fixed z-30 top-0 left-0 transition-transform duration-300 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:static`}
      >
        <div className="flex justify-between items-center md:block">
          <Link to="/" className="text-3xl font-bold text-black">
            Desh<span className="text-green-600">C</span>ourier
          </Link>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoClose size={28} />
          </button>
        </div>

        <nav className="flex flex-col space-y-3 pt-4">
          <Link
            to="/admin/dashboard-home"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/admin/pending-riders"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            🛵 Pending Riders
          </Link>
          <Link
            to="/admin/users"
            className="text-gray-700 hover:text-green-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            👥 Users
          </Link>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white shadow px-5 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Desh<span className="text-green-600">C</span>ourier
        </Link>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-700"
        >
          <HiOutlineMenuAlt3 size={28} />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1  p-6 pt-20 md:pt-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
