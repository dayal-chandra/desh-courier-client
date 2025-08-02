import React from "react";
import signup from "/signup.png";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaCloudUploadAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Signup = () => {
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
            <fieldset className="fieldset">
              <label className="label text-[18px] text-black">Name</label>
              <input
                type="text"
                className="input w-full bg-gray-50 text-black"
                placeholder="Name"
              />
              <label className="label text-[18px] text-black">Email</label>
              <input
                type="email"
                className="input w-full bg-gray-50 text-black"
                placeholder="Email"
              />

              <label className="label text-[18px] text-black">Password</label>
              <input
                type="password"
                className="input w-full bg-gray-50 text-black"
                placeholder="Password"
              />

              <label className="block text-[18px] text-black">
                Upload Photo
              </label>
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-green-500 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaCloudUploadAlt className="text-4xl text-green-600 mb-2" />
                  <p className="mb-1 text-sm text-gray-600">
                    <span className="font-semibold">Click to upload</span> or
                    drag & drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, JPEG (Max: 5MB)
                  </p>
                </div>
                <input id="file-upload" type="file" className="hidden" />
              </label>

              <button className="btn text-black hover:text-green-700 bg-green-600 hover:bg-transparent border border-green-700 mt-4">
                Sign Up
              </button>
              <div className="text-[16px] text-black py-2">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600">
                  Login
                </Link>
              </div>
              <div className="flex items-center w-full">
                <hr className="w-full dark:text-gray-600" />
                <p className="px-3 dark:text-gray-600">OR</p>
                <hr className="w-full dark:text-gray-600" />
              </div>

              <button className="btn bg-green-600 text-black border border-green-700 hover:text-green-700 hover:bg-transparent">
                <FcGoogle size={25} />
                Continue with Google
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
