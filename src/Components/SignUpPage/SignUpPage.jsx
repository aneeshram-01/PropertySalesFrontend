import React from "react";
import Navigationbar from "../CommonComponents/Navigationbar"; // Import the navigation bar component
import SignUp from "./SignUp"; // Import the SignUp component
import Footer from "../CommonComponents/Footer"; // Import the footer component

export default function SignUpPage() {
  return (
    <>
      <Navigationbar /> {/* Render the navigation bar */}
      <div className="mt-4 flex justify-center"> {/* Center the SignUp component */}
        <SignUp /> {/* Render the SignUp form */}
      </div>
      <Footer /> {/* Render the footer */}
    </>
  );
}
