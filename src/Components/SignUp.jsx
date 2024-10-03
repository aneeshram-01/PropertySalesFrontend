import React, { useState } from "react";
import { useTheme } from "next-themes"; // Import the theme hook
import Navigationbar from "./Navigationbar";
import { AcmeLogo } from "./AcmeLogo";

export default function Register() {
  const { theme } = useTheme(); // Get the current theme

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [customerType, setCustomerType] = useState("select"); // New state for customer type
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    customerType: "", // New error state for customer type
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Basic form validation logic
  const validateForm = () => {
    let valid = true;
    let formErrors = { ...errors };

    // Name validation
    if (!name) {
      formErrors.name = "Name is required";
      valid = false;
    } else {
      formErrors.name = "";
    }

    // Email validation
    if (!email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      valid = false;
    } else {
      formErrors.email = "";
    }

    // Phone number validation
    if (!phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
      valid = false;
    } else {
      formErrors.phoneNumber = "";
    }

    // Address validation
    if (!address) {
      formErrors.address = "Address is required";
      valid = false;
    } else {
      formErrors.address = "";
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
      valid = false;
    } else {
      formErrors.password = "";
    }

    // Confirm password validation
    if (confirmPassword !== password) {
      formErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      formErrors.confirmPassword = "";
    }

    // Customer Type validation
    if (customerType === "select") {
      formErrors.customerType = "Customer type is required";
      valid = false;
    } else {
      formErrors.customerType = "";
    }

    setErrors(formErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate an API call
      setTimeout(() => {
        console.log("Form submitted", {
          name,
          email,
          phoneNumber,
          address,
          password,
          customerType, // Send customer type in the form data
        });
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

        {/* Customer Type Dropdown */}
        <div>
          <label
            htmlFor="customerType"
            className="block text-sm font-medium leading-6"
          >
            Customer Type
          </label>
          <div className="mt-2">
            <select
              id="customerType"
              name="customerType"
              value={customerType}
              onChange={(e) => setCustomerType(e.target.value)}
              className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                errors.customerType
                  ? "ring-red-600 focus:ring-red-600"
                  : "ring-gray-300 focus:ring-indigo-600"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                theme === "dark"
                  ? "text-white bg-gray-700"
                  : "text-gray-900 bg-white"
              }`}
            >
              <option value="select">Select a type</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.customerType && (
              <p className="text-sm text-red-600">{errors.customerType}</p>
            )}
          </div>
        </div>

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.name
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>
          </div>

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

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                autoComplete="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.phoneNumber
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-sm text-red-600">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Address Input */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.address
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-600">{errors.address}</p>
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

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${
                  errors.confirmPassword
                    ? "ring-red-600 focus:ring-red-600"
                    : "ring-gray-300 focus:ring-indigo-600"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                  theme === "dark"
                    ? "text-white bg-gray-700"
                    : "text-gray-900 bg-white"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isSubmitting ? "Submitting..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
