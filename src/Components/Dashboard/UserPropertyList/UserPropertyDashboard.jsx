import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DashNav from "../../DashboardComponents/DashNav";
import SideNav from "../../DashboardComponents/SideNav";
import PropertyMainSection from "../UserPropertyList/UserPropertyMainSection";
import PropertyAdd from "../../Property/PropertyAdd";
import { Button } from "@nextui-org/react";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(null); // State to store userId

  useEffect(() => {
    // Get the userId from local storage when the component mounts
    const storedUserId = localStorage.getItem("userId");
    setUserId(storedUserId);
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Open the Add Property Modal
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  // Close the Add Property Modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ display: "flex", position: "relative", minHeight: "100vh" }}>
      <DashNav open={drawerOpen} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={drawerOpen} handleDrawerClose={handleDrawerClose} />

      <PropertyMainSection />

      {/* Add Property Button */}
      <Button
        color="primary"
        variant="solid"
        onPress={handleModalOpen}
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

export default Dashboard;
