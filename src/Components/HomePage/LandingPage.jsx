import React from 'react'; // Import React library
import Navigationbar from "../CommonComponents/Navigationbar"; // Import Navigationbar component
import HeroSection from './HeroSection'; // Import HeroSection component
import Footer from "../CommonComponents/Footer"; // Import Footer component
import AboutUs from './AboutUs'; // Import AboutUs component
import Teams from './Teams'; // Import Teams component

// LandingPage component
export default function LandingPage() {
  return (
    <div>
      <Navigationbar /> {/* Render Navigation bar */}
      <HeroSection /> {/* Render Hero section */}
      <AboutUs /> {/* Render About Us section */}
      <Teams /> {/* Render Teams section */}
      <Footer /> {/* Render Footer */}
    </div>
  );
}
