import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";
  const axiosInstance = useAxios();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(async (result) => {
        const user = result.user;
        console.log(result.user);

        // update user info in the database
        const userInfo = {
          email: user.email,
          role: "customer",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const res = await axiosInstance.post("/users", userInfo);
        console.log("user update info", res.data);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex items-center w-full pb-5">
        <hr className="w-full dark:text-gray-600" />
        <p className="px-3 dark:text-gray-600">OR</p>
        <hr className="w-full dark:text-gray-600" />
      </div>

      <button
        onClick={handleGoogleSignIn}
        className="btn w-full bg-green-600 text-black border border-green-700 hover:text-green-700 hover:bg-transparent"
      >
        <FcGoogle size={25} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
