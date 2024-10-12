import React, { useState } from "react";
import { useTheme } from "next-themes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AcmeLogo } from "../CommonComponents/AcmeLogo";

export default function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // State variables
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Customer"); // New state to toggle between Customer and Broker
  const [errors, setErrors] = useState({ userName: "", password: "", global: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Adjust validation for userName and password
  const validateForm = () => {
    let valid = true;
    let userNameError = "";
    let passwordError = "";

    if (!userName) {
      userNameError = "Username is required";
      valid = false;
    }

    if (!password) {
      passwordError = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors({ userName: userNameError, password: passwordError });
    return valid;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors((prevErrors) => ({ ...prevErrors, global: "" })); // Reset global error

      try {
        // Set the endpoint dynamically based on userType
        const endpoint =
          userType === "Customer"
            ? "http://localhost:5176/api/Login/LoginUser"
            : "http://localhost:5176/api/Login/LoginBroker";

        const response = await axios.post(endpoint, {
          userName,
          password,
        });
        const userId = response.data.userId;
        localStorage.setItem("userId", userId);

        console.log("Login successful", response.data);
        navigate("/dashboard"); // Redirect to dashboard on success
      } catch (error) {
        console.error(
          "Login failed:",
          error.response ? error.response.data.Message : error.message
        );
        setErrors((prevErrors) => ({
          ...prevErrors,
          global: "Invalid username or password",
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-black " : "bg-white"
      }`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/assets/hero-background-dark.jpg')"
            : "url('/assets/hero-background-light.jpg')",
      }}
    >
      <div className="absolute inset-0 opacity-50"></div>

      <div
        className={`relative z-20 flex flex-col justify-center items-center px-6 py-12 lg:px-8 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-blue-200 text-gray-900"
        } p-8 rounded-lg shadow-lg space-y-6`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <AcmeLogo className="mb-4" />

          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Login to your account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {errors.global && (
            <p className="text-sm text-red-600">{errors.global}</p>
          )}

          {/* Username Input */}
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium leading-6"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.userName
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.userName && (
                <p className="text-sm text-red-600">{errors.userName}</p>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.password
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>
          </div>

          {/* User Type Dropdown */}
          <div>
            <label
              htmlFor="userType"
              className="block text-sm font-medium leading-6"
            >
              Select Role
            </label>
            <div className="mt-2">
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.userName
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              >
                <option value="Customer">Customer</option>
                <option value="Broker">Broker</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500">
          <a href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
}
