import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/Signup/Signup";
import BookAParcel from "../pages/BookAParcel/BookAParcel";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyParcel from "../pages/MyParcel/MyParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/book-a-parcel",
        element: (
          <PrivateRoute>
            <BookAParcel></BookAParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-parcel",
        element: (
          <PrivateRoute>
            <MyParcel></MyParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
