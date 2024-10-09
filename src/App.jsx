import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./Components/HomePage/LandingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import ProfileDashboard from "./Components/Dashboard/Profile/ProfileDashboard";
import PropertyDashboard from "./Components/Dashboard/PropertyList/PropertyDashboard";

function App() {
  return (
    <>
    <Router>
      <div>
        
        <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/dashboard" element={<ProfileDashboard/>} />
        <Route path="/dashboard/locations" element={<PropertyDashboard/>} />
        <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;
