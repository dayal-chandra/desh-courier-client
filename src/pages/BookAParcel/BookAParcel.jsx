import React from "react";
import { useForm } from "react-hook-form";
import { FaBoxOpen, FaMapMarkedAlt, FaMoneyBillWave } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const BookAParcel = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = (data) => {
  //   if (!user?.email) {
  //     return Swal.fire({
  //       icon: "error",
  //       title: "User not logged in",
  //       text: "Please log in to book a parcel.",
  //     });
  //   }

  //   const parcelData = {
  //     ...data,
  //     senderEmail: user.email,
  //     status: "Pending",
  //     bookingTime: new Date(),
  //   };

  //   console.log("Booking Data:", parcelData);

  //   axiosSecure.post("/parcels", parcelData).then(() => {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Parcel added Successfully!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     reset();
  //   });
  // };

  const onSubmit = (data) => {
    if (!user?.email) {
      return Swal.fire({
        icon: "error",
        title: "User not logged in",
        text: "Please log in to book a parcel.",
      });
    }

    const trackingId = `DSH-${Date.now()}`;

    const parcelData = {
      ...data,
      senderEmail: user.email,
      status: "Pending",
      bookingTime: new Date(),
      trackingId,
    };

    console.log("Booking Data:", parcelData);

    axiosSecure.post("/parcels", parcelData).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Parcel added Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-10 bg-green-100 shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        📦 Book a Parcel
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Parcel title */}
        <div>
          <label className="mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaBoxOpen /> Parcel Title
          </label>
          <input
            type="text"
            placeholder="Enter parcel title"
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("parcelTitle", {
              required: "Parcel title is required",
            })}
          />
          {errors.parcelTitle && (
            <p className="text-red-500 text-sm mt-1">
              {errors.parcelTitle.message}
            </p>
          )}
        </div>

        {/* Receiver name */}
        <div>
          <label className="mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaBoxOpen /> Receiver Name
          </label>
          <input
            type="text"
            placeholder="Enter receiver's full name"
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("receiverName", {
              required: "Receiver name is required",
            })}
          />
          {errors.receiverName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.receiverName.message}
            </p>
          )}
        </div>

        {/* Pickup Address */}
        <div>
          <label className=" mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaMapMarkedAlt /> Pickup Address
          </label>
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("pickupAddress", {
              required: "Pickup address is required",
            })}
          />
          {errors.pickupAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pickupAddress.message}
            </p>
          )}
        </div>

        {/* Delivery Address */}
        <div>
          <label className=" mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaMapMarkedAlt /> Delivery Address
          </label>
          <input
            type="text"
            placeholder="Enter delivery location"
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("deliveryAddress", {
              required: "Delivery address is required",
            })}
          />
          {errors.deliveryAddress && (
            <p className="text-red-500 text-sm mt-1">
              {errors.deliveryAddress.message}
            </p>
          )}
        </div>

        {/* Parcel Size / Type */}
        <div>
          <label className=" mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaBoxOpen /> Parcel Size / Type
          </label>
          <select
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("parcelType", { required: "Parcel type is required" })}
          >
            <option value="">Select parcel type</option>
            <option value="small">Small (under 1kg)</option>
            <option value="medium">Medium (1kg - 5kg)</option>
            <option value="large">Large (5kg+)</option>
            <option value="fragile">Fragile Item</option>
          </select>
          {errors.parcelType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.parcelType.message}
            </p>
          )}
        </div>

        {/* Delivery fee */}
        <div>
          <label className="mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaMoneyBillWave /> Delivery Fee
          </label>
          <input
            type="number"
            placeholder="Enter delivery fee"
            className="w-full px-4 py-2 text-gray-600 bg-white border border-dashed border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            {...register("deliveryFee", {
              required: "Delivery fee is required",
              min: {
                value: 1,
                message: "Fee must be at least 1",
              },
            })}
          />
          {errors.deliveryFee && (
            <p className="text-red-500 text-sm mt-1">
              {errors.deliveryFee.message}
            </p>
          )}
        </div>

        {/* Payment Method */}
        <div>
          <label className=" mb-1 font-medium text-gray-700 flex items-center gap-2">
            <FaMoneyBillWave /> Payment Method
          </label>
          <div className="flex gap-4 text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="cod"
                {...register("paymentMethod", {
                  required: "Payment method is required",
                })}
              />
              COD (Cash on Delivery)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="prepaid"
                {...register("paymentMethod", {
                  required: "Payment method is required",
                })}
              />
              Prepaid
            </label>
          </div>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">
              {errors.paymentMethod.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          Book Pickup
        </button>
      </form>
    </div>
  );
};

export default BookAParcel;
