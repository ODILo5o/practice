import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("1234");
  // const [phoneNumber, setPhoneNumber] = useState("+99891 293 63 07");
<h1></h1>
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("users/token/", { username, password });

      if (response.status === 200) {
        toast.success("You are logged in");
        setTimeout(() => {
          localStorage.setItem("user", response.data.access);
          navigate("TableCom");
        }, 2000);
      } else {
        toast.error("Failed to login");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(error.message || "An error occurred during login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-2 h-8 mx-auto">
          Login
        </h1>
        <hr className="border border-white-300 mb-3" />
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="Usermane"
              className="block text-sm font-medium text-grey"
            >
             Usermane
            </label>
            <input
              type="Usermane"
              id="Usermane"
              value={setUsername}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-800"
              placeholder="Usermane"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-grey"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-800"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <p className="text-center mt-3">
            <a href="" className="text-blue-600">
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

