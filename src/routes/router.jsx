import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/Signup/Signup";
import BookAParcel from "../pages/BookAParcel/BookAParcel";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyParcel from "../pages/MyParcel/MyParcel";
import BeARider from "../pages/BeARider/BeARider";
import AdminLayout from "../layouts/AdminLayout";
import DashboardHome from "../Admin/DashboardHome";
import PendingRiders from "../Admin/PendingRiders";
import Users from "../Admin/Users";
import PendingParcels from "../Admin/PendingParcels";
import AssignedParcel from "../pages/AssignedParcel/AssignedParcel";

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
      {
        path: "/assigned-parcels",
        element: (
          <PrivateRoute>
            <AssignedParcel></AssignedParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "/be-a-rider",
        element: (
          <PrivateRoute>
            <BeARider></BeARider>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout></AdminLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard-home",
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "pending-riders",
        element: (
          <PrivateRoute>
            <PendingRiders></PendingRiders>
          </PrivateRoute>
        ),
      },
      {
        path: "pending-parcels",
        element: (
          <PrivateRoute>
            <PendingParcels></PendingParcels>
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
