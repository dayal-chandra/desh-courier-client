import React from "react";
import signup from "/signup.png";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
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
              <label className="label text-[18px] text-black">
                Upload Photo
              </label>
              <input
                type="file"
                className="input w-full bg-gray-50 text-black"
                placeholder="Select Your Photo"
              />
              <label className="label text-[18px] text-black">Password</label>
              <input
                type="password"
                className="input w-full bg-gray-50 text-black"
                placeholder="Password"
              />
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
