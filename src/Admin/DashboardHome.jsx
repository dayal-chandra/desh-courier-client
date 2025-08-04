import React from "react";
import { FaBoxOpen, FaMoneyBillWave, FaTruck } from "react-icons/fa";

const DashboardHome = () => {
  const stats = {
    dailyBookings: 152,
    failedDeliveries: 6,
    codAmount: 12450,
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📊 Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 text-black sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaBoxOpen className="text-3xl text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Today's Bookings</p>
            <h2 className="text-xl font-bold">{stats.dailyBookings}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaTruck className="text-3xl text-red-400" />
          <div>
            <p className="text-sm text-gray-500">Failed Deliveries</p>
            <h2 className="text-xl font-bold">{stats.failedDeliveries}</h2>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaMoneyBillWave className="text-3xl text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Total COD</p>
            <h2 className="text-xl font-bold">৳ {stats.codAmount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
