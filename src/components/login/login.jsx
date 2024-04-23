import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://avto.pythonanywhere.com/api/login/",
        { username, password }
      );

      if (response.status === 200 && response.data && response.data.access) {
        toast.success("You are logged in");
        localStorage.setItem("user", response.data.access);
        if (username === "admin" && password === "1234") {
          navigate("/TableCom");
        } else {
          toast.error("Invalid username or password");
        }
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
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-2 py-1.5 text-gray-800 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-transparent dark:text-gray-300 dark:focus:ring-gray-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-2 py-1.5 text-gray-800 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:border-gray-600 dark:bg-transparent dark:text-gray-300 dark:focus:ring-gray-500"
                placeholder="Password"
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5 text-gray-800" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-800" />
                )}
              </span>
            </div>
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
      <ToastContainer />
    </div>
  );
};

export default Login;

