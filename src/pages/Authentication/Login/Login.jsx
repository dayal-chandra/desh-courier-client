import React from "react";
import login from "/login.png";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className=" max-w-7xl mx-auto">
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
            <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
              <label className="label text-[18px] text-black">Email</label>
              <input
                type="email"
                className="input w-full bg-gray-50 text-black"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              <label className="label text-[18px] text-black">Password</label>
              <input
                type="password"
                className="input w-full bg-gray-50 text-black"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 character long.
                </p>
              )}

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
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
