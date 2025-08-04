import React, { useState } from "react";
import signup from "/signup.png";
import { Link } from "react-router";
import { FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [profilePic, setProfilePic] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const axiosInstance = useAxios();

  const { createUser, updateUserProfile } = useAuth();

  // const onSubmit =(data) => {
  //   // console.log(data);
  //   createUser(data.email, data.password)
  //     .then(async (result) => {
  //       console.log(result.user);

  //       // update user info in the database
  //       const userInfo = {
  //         email: data.email,
  //         role: "customer",
  //         created_at: new Date().toISOString(),
  //         last_log_in: new Date().toISOString(),
  //       };

  //       const userRes = await axiosInstance.post("/users", userInfo);
  //       console.log(userRes.data);

  //       //  update user profile in firebase
  //       const userProfile = {
  //         displayName: data.name,
  //         photoURL: profilePic,
  //       };
  //       updateUserProfile(userProfile)
  //         .then(() => {
  //           console.log("Profile picture uploaded.");
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // Image Upload

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      console.log(result.user);

      // 1. Update Firebase user profile
      await updateUserProfile({
        displayName: data.name,
        photoURL: profilePic,
      });
      console.log("User profile updated.");

      // 2. OPTIONAL: Refresh user to reflect latest profile info
      await result.user.reload();

      // 3. Update backend database
      const userInfo = {
        email: data.email,
        role: "customer",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      const userRes = await axiosInstance.post("/users", userInfo);
      console.log("User saved to DB:", userRes.data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_upload_key
      }`;
      const res = await axios.post(imageUploadUrl, formData);

      setProfilePic(res.data.data.url);
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="hero-content px-5 py-8 flex flex-col md:flex-row  w-full">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center lg:text-left w-full md:w-1/2"
        >
          <img className="w-full" src={signup} alt="login photo" />
        </motion.div>

        <div className="card bg-green-100 w-full md:w-1/2 shadow-2xl ">
          <div className="card-body">
            <h1 className="text-2xl text-black font-semibold text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              <label className="label text-[18px] text-black">Name</label>
              <input
                type="text"
                className="input w-full bg-gray-50 text-black"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500">Name is required.</p>
              )}

              <label className="label text-[18px] text-black">Email</label>
              <input
                type="email"
                className="input w-full bg-gray-50 text-black"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required.</p>
              )}

              <label className="label text-[18px] text-black">Password</label>
              <input
                type="password"
                className="input w-full bg-gray-50 text-black"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required.</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 characters or longer.
                </p>
              )}

              {/* Image Upload */}
              <label className="block text-[18px] text-black">
                Upload Photo
              </label>
              {profilePic ? (
                <div className="mt-4 flex justify-center">
                  <img
                    src={profilePic}
                    alt="Uploaded preview"
                    className="w-32 h-32 object-cover rounded-2xl border border-green-600 shadow"
                  />
                </div>
              ) : (
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-green-500 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex flex-col items-center justify-center py-2">
                    {isUploading ? (
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          className="animate-spin h-8 w-8 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z"
                          />
                        </svg>
                        <p className="text-sm text-gray-600">Uploading...</p>
                      </div>
                    ) : (
                      <>
                        <FaCloudUploadAlt className="text-4xl text-green-600 mb-2" />
                        <p className="mb-1 text-sm text-gray-600">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag & drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, JPEG (Max: 5MB)
                        </p>
                      </>
                    )}
                  </div>

                  <input
                    onChange={handleImageUpload}
                    id="file-upload"
                    type="file"
                    className="hidden"
                  />
                </label>
              )}

              <button className="btn text-black hover:text-green-700 bg-green-600 hover:bg-transparent border border-green-700 mt-4">
                Sign Up
              </button>
              <div className="text-[16px] text-black py-2">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600">
                  Login
                </Link>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
