import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [dbUser, setDbUser] = useState("");
  const axiosInstance = useAxios();
  console.log(dbUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user?.email) {
          const response = await axiosInstance(`/users/${user.email}`);
          setDbUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user?.email, axiosInstance]);

  const handleLogout = () => {
    logout()
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
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

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/book-a-parcel">Book A Parcel</NavLink>
      </li>

      <li>
        <NavLink to="/my-parcel">My Parcel</NavLink>
      </li>

      {dbUser?.role === "customer" && (
        <li>
          <NavLink to="/be-a-rider">Be A Rider</NavLink>
        </li>
      )}

      {dbUser?.role === "admin" && (
        <li>
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
      )}

      {user ? (
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    const appliedTheme = newTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", appliedTheme);
    localStorage.setItem("theme", appliedTheme);
  };

  return (
    <div className="bg-base-100 border-b fixed top-0 w-full z-40">
      <div className="navbar max-w-7xl mx-auto px-5">
        <div className="navbar-start">
          <div className="z-50">
            <div tabIndex={0} role="button" className=" md:hidden">
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className=" drawer-button">
                    {" "}
                    <TiThMenu size={25} />
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <div className="menu bg-base-200 min-h-full w-1/2 pt-12 relative">
                    <label
                      htmlFor="my-drawer"
                      className="absolute top-5 left-5 cursor-pointer"
                    >
                      <IoClose size={25} />
                    </label>

                    <div className="border-b border-gray-300 mb-2"></div>

                    {user && (
                      <div className="flex flex-col justify-center items-center gap-2 md:hidden">
                        <img
                          className="w-10 h-10 rounded-full object-cover border-2 border-green-600 shadow-md"
                          src={user.photoURL}
                          alt="User"
                        />
                        <p>{user.displayName}</p>
                      </div>
                    )}

                    {navItems}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/" className="text-3xl font-bold hidden md:flex">
            Desh<span className="text-green-600">C</span>ourier
          </Link>
        </div>
        <div className="navbar-center md:hidden">
          <Link to="/" className="text-3xl font-bold  ">
            Desh<span className="text-green-600">C</span>ourier
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-2 hidden md:flex">
            {navItems}
          </ul>
          <div className="mt-2">
            <button type="button" onClick={toggleTheme}>
              {theme ? <MdOutlineWbSunny size={25} /> : <FaMoon size={25} />}
            </button>
          </div>
          <div>
            {user ? (
              <div className="rounded-full border border-green-600 ml-4 hidden md:flex">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
