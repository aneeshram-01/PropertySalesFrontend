import React, { useState } from "react";
import { useTheme } from "next-themes"; // Import the theme hook
import Navigationbar from "./Navigationbar";
import { AcmeLogo } from "./AcmeLogo";

export default function Login() {
  const { theme } = useTheme(); // Get the current theme

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Basic form validation logic
  const validateForm = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    // Email validation
    if (!email) {
      emailError = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Email address is invalid";
      valid = false;
    }

    // Password validation
    if (!password) {
      passwordError = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate an API call
      setTimeout(() => {
        console.log("Form submitted", { email, password });
        setIsSubmitting(false);
      }, 1000);
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
            ? "url('/assets/hero-background-dark.jpg')" // Dark mode background
            : "url('/assets/hero-background-light.jpg')", // Light mode background
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 opacity-50"></div>

      {/* Form Container */}
      <div
        className={`relative z-20 flex flex-col justify-center items-center px-6 py-12 lg:px-8 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-blue-200 text-gray-900"
        } p-8 rounded-lg shadow-lg space-y-6`}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <AcmeLogo className="mb-4" />
          
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Create your account
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.email
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-center"
              >
                Password
              </label>
            </div>

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
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </form>

        {/* Sign up link */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register Here!
          </a>
        </p>
      </div>
    </div>
  );
}
