import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://omofood.pythonanywhere.com/api/v1/users/token/", {
        username,
        password,
      });
      

      if (response.status === 200) {
        toast.success("You are logged in");
        setTimeout(() => {
          localStorage.setItem("user", response.data.access);
          navigate("/TableCom");
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
              type="tel"
              id="phone"
              value={username}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
              placeholder="Phone Number"
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
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
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

