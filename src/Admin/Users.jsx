import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, [axiosSecure]);

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">👥 All Users</h2>
      <div className="overflow-x-auto bg-white  rounded-xl shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Username</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="p-2">{user.name || "N/A"}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role || "User"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
