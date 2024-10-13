import React from 'react';
import Navigationbar from '../CommonComponents/Navigationbar'; // Import the navigation bar component
import Login from './Login'; // Import the Login component
import Footer from '../CommonComponents/Footer'; // Import the footer component

export default function LoginPage() {
  return (
    <>
      <Navigationbar /> {/* Render the navigation bar */}
      
      <div className="flex justify-center items-center min-h-screen"> {/* Center Login component */}
        <Login /> {/* Render the Login component */}
      </div>
      
      <Footer /> {/* Render the footer */}
    </>
  );
}
