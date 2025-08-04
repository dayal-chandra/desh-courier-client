import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PendingRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    axiosSecure.get("/riders").then((res) => {
      setRiders(res.data);
    });
  }, [axiosSecure]);

  const handleApprove = async (riderId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to approve this rider?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, approve!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        const response = await axiosSecure.patch(`/approve-rider/${riderId}`);

        if (response.data) {
          Swal.fire({
            title: "Approved!",
            text: "Rider has been approved successfully.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });

          // Update local state - remove approved rider
          setRiders((prevRiders) =>
            prevRiders.filter((rider) => rider._id !== riderId)
          );
        }
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to approve rider. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">🛵 Pending Riders</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Region</th>
              <th className="p-2">Vehicle</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((r) => (
              <tr key={r._id} className="border-t">
                <td className="p-2">{r.fullName}</td>
                <td className="p-2">{r.phone}</td>
                <td className="p-2">{r.region}</td>
                <td className="p-2">{r.vehicleType}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleApprove(r._id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRiders;
