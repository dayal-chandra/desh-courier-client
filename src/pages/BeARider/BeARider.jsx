import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaMotorcycle, FaIdCard, FaMapMarkerAlt } from "react-icons/fa";

const BeARider = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user?.email) {
      return Swal.fire({
        icon: "error",
        title: "Not logged in",
        text: "Please login to apply as a rider.",
      });
    }

    const riderData = {
      ...data,
      name: user.fullName,
      email: user.email,
      status: "pending",
      appliedAt: new Date(),
    };

    try {
      await axiosSecure.post("/riders", riderData);
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "We will get back to you soon.",
        timer: 2000,
        showConfirmButton: false,
      });
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-10 bg-green-100 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🛵 Become a Rider
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2">
            <FaIdCard /> Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 bg-white text-black border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2">
            <FaIdCard /> Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-white text-black border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Region */}
        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2">
            <FaMapMarkerAlt /> Region
          </label>
          <input
            type="text"
            placeholder="Enter your region"
            className="w-full px-4 py-2 bg-white text-black border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("region", { required: "Region is required" })}
          />
          {errors.region && (
            <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
          )}
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="font-medium text-gray-700 flex items-center gap-2">
            <FaMotorcycle /> Vehicle Type
          </label>
          <select
            className="w-full px-4 py-2 bg-white text-black border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("vehicleType", {
              required: "Vehicle type is required",
            })}
          >
            <option value="">Select your vehicle</option>
            <option value="motorbike">Motorbike</option>
            <option value="scooter">Scooter</option>
            <option value="bicycle">Bicycle</option>
            <option value="auto">Auto Rickshaw</option>
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.vehicleType.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Apply as Rider
        </button>
      </form>
    </div>
  );
};

export default BeARider;
