import React from "react";
import Navigationbar from "../CommonComponents/Navigationbar";
import SignUp from "./SignUp";
import Footer from "../CommonComponents/Footer";
export default function SignUpPage() {
  return (
    <>
      <Navigationbar />
      <div className="mt-4">
        <SignUp />
      </div>
      <Footer />
    </>
  );
}
