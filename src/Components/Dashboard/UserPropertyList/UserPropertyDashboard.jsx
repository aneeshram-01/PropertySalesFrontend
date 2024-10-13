// Dashboard.jsx
import React, { useState, useEffect } from "react"; // Import React and hooks
import { Box } from "@mui/material"; // Import Box for layout management
import DashNav from "../../DashboardComponents/DashNav"; // Import navigation component
import SideNav from "../../DashboardComponents/SideNav"; // Import sidebar navigation component
import PropertyMainSection from "../UserPropertyList/UserPropertyMainSection"; // Import main section for user properties
import PropertyAdd from "../../Property/PropertyAdd"; // Import component for adding properties
import { Button } from "@nextui-org/react"; // Import Button from Next UI

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal open/close
  const [userId, setUserId] = useState(null); // State to store userId

  useEffect(() => {
    // Get the userId from local storage when the component mounts
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId); // Set userId state
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true); // Open the drawer
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false); // Close the drawer
  };

  // Open the Add Property Modal
  const handleModalOpen = () => {
    setModalOpen(true); // Open the modal
  };

  // Close the Add Property Modal
  const handleModalClose = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
      <DashNav open={drawerOpen} handleDrawerOpen={handleDrawerOpen} /> {/* Render DashNav */}
      <SideNav open={drawerOpen} handleDrawerClose={handleDrawerClose} /> {/* Render SideNav */}

      <PropertyMainSection /> {/* Render main section for user properties */}

      {/* Add Property Button */}
      <Button
        color="primary"
        variant="solid"
        onPress={handleModalOpen} // Open modal on button click
        disabled={!userId} // Disable button if userId is not available
        style={{
          position: "fixed",
          bottom: 16, // Distance from the bottom
          right: 16, // Distance from the right
          zIndex: 9990, // Ensures the button stays on top of other elements
        }}
      >
        Add Property
      </Button>

      {/* Pass modal state and close handler to PropertyAdd */}
      <PropertyAdd isOpen={modalOpen} onClose={handleModalClose} />
    </Box>
  );
};

export default Dashboard; // Export Dashboard component for use in other parts of the application
