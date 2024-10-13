// Import necessary libraries and components
import { useTheme } from "next-themes"; // Hook for managing theme
import { Button } from "@nextui-org/react"; // Button component from NextUI
import MapComponent from "./MapComponent"; // Importing MapComponent

// HeroSection component
export default function HeroSection() {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section
      className={`relative text-white min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`} // Conditional background based on theme
      style={{
        backgroundImage: theme === "dark"
          ? "url('/assets/hero-background-dark.jpg')"  // Dark mode background
          : "url('/assets/hero-background-light.jpg')"  // Light mode background
      }}
    >
      {/* Content container for centered content */}
      <div className="flex flex-col items-center justify-center text-center px-4 space-y-8">
        {/* Text Block */}
        <div className={`flex flex-col items-center justify-center text-center space-y-4 ${theme === "dark" ? "text-white" : "text-black"} `}>
          <h1 className="text-5xl font-bold">
            Welcome to Mercurial
          </h1>
          <p className="text-md max-w-xl whitespace-pre-wrap">
            Discover the best real estate properties with Mercurial. 
            Whether you're looking to buy or sell, we are here to help you every step of the way.
            Join Us!
          </p>
          <h2 className="text-xl max-w-xl whitespace-pre-wrap font-bold">
            A connection point for real estate needs.
          </h2>
        </div>

        {/* Map Section */}
        <div className="w-full max-w-4xl h-80 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-700">
          <MapComponent /> {/* Display MapComponent */}
        </div>

        {/* Button Section */}
        <div className="pb-10">
          <Button
            className="rounded-lg px-6 py-3 bg-primary transition-colors duration-300 hover:scale-105 mb-8 border-none relative"
            size="lg"
            color="primary"
            variant="solid"
          >
            <a href="/login">Get Started</a> {/* Link to login page */}
          </Button>
        </div>
      </div>
    </section>
  );
}
