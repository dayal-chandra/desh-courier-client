import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PendingParcels = () => {
  const axiosSecure = useAxiosSecure();
  const [parcels, setParcels] = useState([]);
  const [riders, setRiders] = useState([]);

  useEffect(() => {
    axiosSecure.get("/parcels/pending").then((res) => {
      setParcels(res.data);
    });

    axiosSecure.get("/riders/approved").then((res) => {
      setRiders(res.data);
    });
  }, [axiosSecure]);

  const handleAssignRider = async (parcelId, riderId) => {
    try {
      const response = await axiosSecure.patch(`/parcels/assign/${parcelId}`, {
        riderId,
      });

      if (response.data.modifiedCount > 0) {
        Swal.fire("Success!", "Rider assigned successfully!", "success");

        setParcels(parcels.filter((parcel) => parcel._id !== parcelId));
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to assign rider.", "error");
    }
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Pending Parcels</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border ">
          <thead>
            <tr className="text-black">
              <th>#</th>
              <th>Tracking ID</th>
              <th>Pickup</th>
              <th>Delivery</th>
              <th>Assign Rider</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td>{parcel.trackingId}</td>
                <td>{parcel.pickupAddress}</td>
                <td>{parcel.deliveryAddress}</td>
                <td>
                  <select
                    onChange={(e) =>
                      handleAssignRider(parcel._id, e.target.value)
                    }
                    defaultValue=""
                    className="select select-bordered"
                  >
                    <option value="" disabled>
                      Select Rider
                    </option>
                    {riders.map((rider) => (
                      <option key={rider._id} value={rider._id}>
                        {rider.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {parcels.length === 0 && (
          <p className="text-center py-8 text-gray-500">No pending parcels.</p>
        )}
      </div>
    </div>
  );
};

export default PendingParcels;
