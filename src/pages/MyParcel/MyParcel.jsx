import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyParcels = () => {
  const [parcels, setParcels] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/parcels?email=${user.email}`)
        .then((res) => setParcels(res.data))
        .catch((err) => console.error("Error fetching parcels:", err));
    }
  }, [user, axiosSecure]);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">My Parcels</h2>
      <table className="table w-full border rounded-lg">
        <thead>
          <tr className="bg-[#b3efb68e] text-black text-left">
            <th>#</th>
            <th>Type</th>
            <th>Tracking ID</th>
            <th>Receiver</th>
            <th>Delivery Address</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id} className="hover:bg-gray-50 hover:text-black">
              <td>{index + 1}</td>
              <td>{parcel.parcelType}</td>
              <td>{parcel.trackingId}</td>
              <td>{parcel.receiverName}</td>
              <td>{parcel.deliveryAddress}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    parcel.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {parcel.status}
                </span>
              </td>
              <td>৳{parcel.deliveryFee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
