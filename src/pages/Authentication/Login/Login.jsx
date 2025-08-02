import React from "react";
import login from "/login.png";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="hero max-w-7xl mx-auto">
      <div className="hero-content px-5 flex-col lg:flex-row-reverse w-full">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-center lg:text-left w-full md:w-1/2"
        >
          <img className="w-full" src={login} alt="login photo" />
        </motion.div>

        <div className="card bg-green-100 w-full md:w-1/2 shadow-2xl ">
          <div className="card-body">
            <h1 className="text-2xl text-black font-semibold text-center">
              Login Your Account
            </h1>
            <fieldset className="fieldset">
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
              <div>
                <a className="link link-hover text-[16px] text-black">
                  Forgot password?
                </a>
              </div>
              <button className="btn text-black hover:text-green-700 bg-green-600 hover:bg-transparent border border-green-700 mt-4">
                Login
              </button>
              <div className="text-[16px] text-black py-2">
                Don't have an account?{" "}
                <Link to="/signup" className="text-green-600">
                  Signup
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

export default Login;
