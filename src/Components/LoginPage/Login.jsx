import React, { useState } from "react";
import { useTheme } from "next-themes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AcmeLogo } from "../CommonComponents/AcmeLogo"; // Ensure this import is correct
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react"; // Importing necessary NextUI components

export default function Login() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // State variables
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(""); // Initially no user type selected
  const [errors, setErrors] = useState({ userName: "", password: "", global: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setErrors((prevErrors) => ({ ...prevErrors, global: "" }));

      try {
        const endpoint =
          userType === "Customer"
            ? "http://localhost:5176/api/Login/LoginUser"
            : "http://localhost:5176/api/Login/LoginBroker";

        const response = await axios.post(endpoint, { userName, password });
        localStorage.setItem('userId', response.data.userId);

        console.log("Login successful", response.data);
        navigate("/dashboard");
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
      className={`max-h-screen flex justify-center items-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
      style={{
        backgroundImage:
          theme === "dark"
            ? "url('/assets/hero-background-dark.jpg')"
            : "url('/assets/hero-background-light.jpg')",
      }}
    >
      <Card
        className={`w-full max-w-sm shadow-lg rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 border-2 ${theme === "dark" ? "bg-black text-white border-gray-700" : "bg-white text-gray-900 border-gray-300"}`}
      >
        <CardHeader className="flex flex-col items-center">
          <AcmeLogo className="mb-4" /> {/* Ensure this component is correct */}
          <h2 className="text-2xl font-bold">Login to your account</h2>
        </CardHeader>
        <CardBody>
          {errors.global && <div className="text-red-600">{errors.global}</div>}

          <form onSubmit={handleSubmit}>
            <Input
              label="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              status={errors.userName ? "error" : "default"}
              className="mb-4"
            />
            {errors.userName && <div className="text-red-600">{errors.userName}</div>}

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              status={errors.password ? "error" : "default"}
              className="mb-4"
            />
            {errors.password && <div className="text-red-600">{errors.password}</div>}

            {/* NextUI Dropdown for user type selection */}
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="w-full">
                  {userType || "Select User"} {/* Placeholder text */}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="User Type"
                onAction={(key) => setUserType(key)} // Set userType based on selected item
              >
                <DropdownItem key="Customer">Customer</DropdownItem>
                <DropdownItem key="Broker">Broker</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button type="submit" disabled={isSubmitting} className="w-full mt-4 mb-2">
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {/* <div className="text-center mt-4">
            <a href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
}
